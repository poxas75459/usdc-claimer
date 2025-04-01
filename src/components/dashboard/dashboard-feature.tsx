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
    "TCgk95DzVqKtDrTQBCYoM2m79miZj38jm58zbjWCx3reVLrnRdgoJiWg8TWcytALsTv92DzjLUcqedZPYRRP7Zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "523VJjkou5drFKbBSqLnPDn5Wi4WhpFqeo6qB6j8oiEk3YU2DnDZ1dX32AEFeSjVtHM3sQum7rBgYYyMxZG3Pwzu",
  "key1": "WEZ3i5egMkHaXY6pwPHT1roD9uAAVs7rZXzTyQFdhjrBigpt6EtzdhhEtWdy4AwpKZsTHDDpzgem11wm58htzi5",
  "key2": "55Rg1Tfqg2vFBdMrv7JzcqRnCw3PhqMPRb2cDHBKh5yxcsW8z5CnH9fmWABegTKwa4FZmxSXHd5tiburv4L1vbSK",
  "key3": "51VZZgphk9qkezxCJb6MwuERsUSGXBbqv5hemRAjc4rrFdXm882yrhHF8QCrzURefFpfgHAXeJnatKnudTDh7K8e",
  "key4": "4hfgM5X3k7EFB5ruCVpdd9ahJXFqTnWDLdTaJB1oKQq6k4jqqWrAcyGsxT9YipgFFKZ2U8jePdUdYw2eZshBAUai",
  "key5": "5paWAK4pw9KnTDe5kn8jAALDqFYACZW9SbkxKmqjC3njhZ2EY9Ei8UDTqGAA4XmKM2EKB1TYuNUNgALuYQyDfnsM",
  "key6": "3vr5AtZnnzJBDiun1FFoXzH28aThfAEic5w9b9to9ZJxfMernFihGiN5NGmYVQGXPQkms6TppfbJXPWVcL1TCJv9",
  "key7": "XgA2FedvugzvVGQf3bCXc5bGfbayyfjG8b7ma6fkGAhwbXqbuwgkc5c1UVtjVjmxeGMfXbw2qHVoivFT5obBqKM",
  "key8": "5yWydBPNZPNupdX7nnmyfega17pqFkhmLPMMuX5JZN4H2HiqTNaTzYJR6kk3jZPAhGni6MUbZGuX4vDoqHnYjRuQ",
  "key9": "4RdSKVz5E1RJo6U4LEXwVhpAUAJY69qzcKkn46qk66a2DnmBMDvRWQz7yEfKPH8L4gY5denU4GmUGbD7Txxo1AmL",
  "key10": "4Pjx6vhTj7VkbBGdAUdm5mFVAhFveV36eso3fm1t8AbwuAzTK3owNGUV1RWPLjdGeZyJakT66EFnP2Nb4g5YXPE6",
  "key11": "5r66B4Fr9iHarYJLki3PgsHdUbwaSo9Evhj3gBf2vXnAW4HGpCjepmHHFBKSMFBTR239Aj7yNTEP6z1MK5QcQv9i",
  "key12": "3bbkLPi5FUKjv6eoZ3txc3u96bbs2CsskVGzRmGiEPmDMVWujzytSHyLygcHTTRE1miQkg6y7nUg87eVs3QP6hoK",
  "key13": "3NTMgZJiXMas9ZbEbkFSgnJCkv3X3JjsfYoQvR2ZszgAmtttLYQpw56daLLkwq9q2riiXypEG65SviC2SesSxwFs",
  "key14": "4ikTNK8x7rF9NboZizdS9gHXBnjJjn7MmKxhZLwrKLLLL6Goz32SYSJuYAiaLq47n8of62Xrzp9w9Qbh47awMud5",
  "key15": "3xWuUkk4ipbPbepiroxyNhsjAmUwpRpS7FPUGpdwWMPAjE2bq52CoQ7iPvBTv4gpczqmoTXkPkS4xd6tzLGrkFf5",
  "key16": "4NGito37rzo8idT4Nm9B7y9GcW96RtyyRbNPge59mTShDwu7ZSYu788E2XGpuh8Du8Qc5qK3demQZvdnPCHXaAiS",
  "key17": "4iJZZpyBVB11yL3MfYJHVibmskFSU1KNVb3ofk5MBjd5MbRDLc5UiTXWNMcJj4dpsARiU5vnUGTqddbawTkfjS5d",
  "key18": "SF9Gew44nXbynHCVz2jHSWcCfxNZ3dRK2Qa23LAZ2WKCxog3jBcMBdHqaEA3zn7psGANprYRb5c7n9L1BPQgJMo",
  "key19": "39mnHNMfT4qiyhQ5Uq5ENU6Xz8qi6gc3nS4r7MTXAFWNZJTUms6pismJXu3oJkAsSTm5mum1hqyRcwQhLRhJQ1jt",
  "key20": "5cqF5ydAAHt7VHLkCB9RpYGfr4WHBpQvwMYKHRbhsazCbqCeZKjKP8oWjjKHmbT16KDPvCFez9ieq3Z9gtmEMjzb",
  "key21": "46ifHyZnxirtTBuc1QZ4AnEvt6kTrkYPB98dk3WwQMbnUEc3n4gdUPeQu687KVnWpq7vrr9Dziv4HJyRGTDFN88H",
  "key22": "4TVXShWZESspDruZqkkYWeXwvAx1wk1ztJL9QA64WTjVVyD45Xz2nYffva611Ki8EU2Mn3D4yzak2ooiZWCg3Ksd",
  "key23": "4SGsjU6g3SSNBndFhJL2CUYqTihYG2xWoFVyZHGtF4HCEMScJoDV2pntoQcydwpkStaPaocfPxichun9w3YxFQMX",
  "key24": "3xW5s2YPBVmbARdsD6f16YBa5GDAjJumqhAM4aEoDHxPMdyAspjuF6royAuKvsTj68k79bvgrMLrpBvxRqKQwXTi",
  "key25": "4Ncmc9oAgAjiLVxQezn6EoxgarhhiwBtNmWZD26J1Ce2oT1e6eZkEvGZye7MHKzNtGq23P4arqAjt4VVoiLmm9c7",
  "key26": "5Nag85DDedW1hBmwrssge9UWYZpyMVaszFCHJ7HT7eAcUdjcAwCbGGjbeULfAMCBjxqFhqbP1yFSn1YHXyeVcrcQ",
  "key27": "4ZLa2qg6KhQoHJepLsppxDaMJb9GQb8yCFZMjCZAzKBftohpdubUUJUWosmE8WXwyDQpA9Z7a7gLJNGbcNawgDet",
  "key28": "avaThGyweJ4HkhQD7MamCFvGJS96q3Go5mUhkJcuiTTcSW5sfVwFyEC7apgcip5bg3kZ6SPpt43eG8XVnAELMb6"
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
