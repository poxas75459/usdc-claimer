/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2dU9bytZHBRM8L2WfuC2jrz1fJtGZBiPece4LvBYkLymMaPRDFGC7hkGQp7MZwaevpHAxTB5HCVjb2rvP89dv6v6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sQyC64LzrqDVVCn5sFEJxMc2CqnH1nvMgHySK4rCoavGhBJ4gtvH8y6886njogUPKnuuf2JdfYyeUw1j3DuMNk7",
  "key1": "42hRwMzLxvTTpiHsRy3bLNX7HyEHNPFbbuGSTYnGEYaFk2Uo48YbgDcM5q2thQto7F1tXapmfGCiqAncwEs1J5Dc",
  "key2": "3yEUdNiDrodSptSnSK9fyggFcsFoj8vZSc83y5i7bik8fNm7TSaKHAVH6z3RLiNaT4Yy2WAHbFhd6hjNuHSERhMv",
  "key3": "4zELLfNCStsVMYVJtsjtcy3fHGpyTpH5mbfXBMbcX68wAA9Hu513dRFa6uKZVHhSJWCACfSTsYtZr1kHaM93cUz6",
  "key4": "bB7CenVSsz7pJVXGtfHqWitNPbXLop8FewqeHbLEzbZZCmwsxkSZf6a2CS6N5Vwk5pifC2NykEG57dX9LQwc1ii",
  "key5": "3AFAEU4NfVxb5RTvUmTTiripJeJWeANqd24t1hkZ9koo1GSPuVS9bdBJbGFgoCG4fvcWRMhYmn8W96zf2XZAbVKe",
  "key6": "2GeE5H812SqRd4vHyPaapLvxebiNjC5V5EdsBdp4VHt5BT3JW7Z83WGeXRHwq663pffaMdQTvB9zvgkPx2TCmmK2",
  "key7": "5roU7RrsvUpxcUfn47Sha2tvuNg6F6jTB21zB244NtKqxMi5KESJ1YtsH5eGyvMdJSBWLP2FDLW1tRuaCWzAZWUM",
  "key8": "4uVFcvadKzpA2giuRxa3BBVNHUWhojDVNLLBY7ht4vH9FrqiVnSnnENUQdgdGqvsKzUpDHkbZjqGnYwvekCzhZqR",
  "key9": "2CHuaahLdvskp9t5zChWXz5DKhwQS9FuDMg9bGC6Q4uBSEaKm4etBXaAAsDGLsxEbiWGZektWChnS6qKAttQbYWr",
  "key10": "4GqKXzW6LYDzkrtCLirX8dk9zX4Xyr7scHh9sgrM7ex99n7m3uv8nnpTb6of7o4TDrNsbf4p7NXR7kdfBvbbhTFb",
  "key11": "52FiYVaUjymh1Dui2EoWzFJFNdaCiEb2Nzx3HY69fwavp5ku5HRLHS1sUN4FK1n6XH8Z9GXHEVcxa9ddEi9Q1idS",
  "key12": "3GP4zDYV28R64tJcS9LnvJH6mpSA8XX5XRQd7Z9WTHwXWJBNiWgrTgfnrVg2fiyvohTkMVbp9ZLQDnsgEUMwN6a2",
  "key13": "3sgvz5coM4KFGTUokpok85prPvSivGRECKNZPUxifRyfEudupXHEQEkcGYhYMVe2TyrjTNhEetC3etsi42VBfzYt",
  "key14": "2X16WFG5kp81oYNQMaMCMsd2VYbczmZ4LqRAfZJ3pWGsxFv5ikXekuxA8sqUcQx9wYKjxCW443zfc9E4CEPpnGJF",
  "key15": "bktttbpsuycnPWT6kUohpu1uycVbjUP6FsznbrG9U5bXJKUt8K7cCxDEDHNNYqT5HQLjDXNzNbycwu9pQNDNjW8",
  "key16": "4cS144jgnSUzYJfPcK4x8izZwhFn4fTKnLN3zxWrgtSMxGeuk5RPqx5ruKMxJyc7jrKJ7KNP1ywPhuE7Pj35TwzZ",
  "key17": "4WEuCkip88W8HCzbRYfzS3UZp5DPp2KNSPx4aESXnnGrUjhSG36fEP4vXwFu8UEGEQnsoge7AoNiokM1BcpEU59",
  "key18": "52eBuGkeMFd9127Fa1QB5LPEGD4q9iMDb3SosUzu1iA47z8yxAzzgPTtwuZHwwcBzfRSqS43PeNjajLyyZ4zHA8X",
  "key19": "3yC5hD7JxNKDarQotefKetkKuGMptWLgNJq1FBYpFWrBZ6d836DjwqyG6TM9vLmjbSuTzZtqZMRee47YdzfFExKr",
  "key20": "2RDKV7opGGAaG96QpzSEqk7qjWxx72uvkAcnpB3FoR4eG8BerF319Gtd94yKQZ536WmWrXXmEgG3WnUvzfvWm6FZ",
  "key21": "4gqLNTJgesGUF5vWW6S5MYZ3F3esnhd6qUo99FKtKm8heYe4AAASWqWpwSgm12VMpH4s73KKDxCTegDKuQnaQcD6",
  "key22": "61dnEMjZGaX5YzzvXwrE4FFxKMYCG7BTay5gvcJyJFmFYumKRcJ4nhA4qkVAStcXbQgQKMuMMjLxAwt6tskpWA5v",
  "key23": "5WdtYbc5nra8xstDvziXcvwugQC4FyUQgueJMac9UXKAnHzKSEDkLoVtWYxA9j191VHvnkqjFiKXW52ZMjZ9XWgu",
  "key24": "3vd4LzraiYh1CCG3VcDypE4kBroFhhF52mqz8NCH4vkxJDAAtHfpBYZgDWXf7XmNDnZ9mBC1jcFAN8szBQXexqVG",
  "key25": "4iKccwyqsqUCuYDo1eU7Aw9ckFDLPDqquASQPBuG6GUc9HhqJW2UpdW7yxFy2FWUBqLo9RGpGcMzMVsustVMZ5uN",
  "key26": "4mxo8caRQXqmoPTvBZ5tj1wgQajVvgSYBfX2278a9LKR1p8xcuMDaXqm5GDuGrRndazCHoFKaUKnk3XpxfwUHNsp",
  "key27": "5uyB7tWhuWbyUgzXgebtrWpKt7pcHg3kFjZ6smqqii2dA3EXHjCQB3hrbhFydEKhxAEpa2Ufjgvh24zyGBAtPF7c",
  "key28": "4ceaKy7QBjep7ND2uc7emjECg3vQv1d9LtstC5yhH56wAD7qEwYK7CVb6WopfHmkvWqnwxtSNm9q4SmxJcB9sJdB"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
