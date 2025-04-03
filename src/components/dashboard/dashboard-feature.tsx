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
    "5ypwiF4jSMhqcFvjhX7etNcaVsz97hBYfgwPPGvtuYEucUaUJW1jaGg3qi2jCGM7prf8DRLuFdg8XmVMyiZqfbS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cQSP5fULDNFwvnFaxRT44uhcaUhEstGcykgaEggVXoNcFvE3Xr1KZvtMoa4GTDmC8KDfZNc96jjTLw6k7BwCcT3",
  "key1": "5BV3wuyUpX49xBb3pX8nY2V2inrpJPYxav8ibtBsP3yEc9b1Qd6wTKhy9mTWxGvEJ7pAvCuYKKMii3qkw9n4tQQQ",
  "key2": "4pt6YnqLHEHwRTa6eybxHEwMFVf4zM9B8dudgpZjrdGnmnu7NDJmHb8FL5G5sFzaZ1f5xG4PXWhsY8cAKLDDiDtG",
  "key3": "4rYJ1UqxsPDJwFtWRbvqDfEEUfAXJs5Zjp5gdjpsBq6GCkdXTvFzFiKtLcwsJfXRvNTFMuRTSppAiP2CWv58myMr",
  "key4": "cKRf8HjuLTC4au9hMG6NNJTi4aAbt5fVyRoREL9a31F1Fb1QL1YN4RYJozB94FcsuECN3GZCWKDYRzhsueX9SCY",
  "key5": "29hihEjNxUYM16fzV7qCNfZrUggSSASPugLFdvnHkr98pKPJusK5B4k3HWv2A92nkVdwdwyv9NNc5kxjKLVnxYBz",
  "key6": "3MbuR6FoX3nVX8Di68kBDVxeCH699AGVjMaA6n7AJwX1wNBn94X65sdbBkGQNmB9ZpczFinYcTiGxUiTbZs28Uxi",
  "key7": "4HsW5NnTdYADoukUrXH4fZ8dc39Yh6cRwqZMoG9XB1fgjcH5SvNncCHUMSZYZkpiicTT3NVDD8KE7BL8mg6JVcnw",
  "key8": "2bW2BBBZ9VZb8HJrHfEoQTeyYSkTVJpUH6buBqqgpHuEpkCdxW5BHq4CyQna3Neu9zCdRPhKr349R6HR7dCjEHca",
  "key9": "jtxpSLch4tK5aGPq4jEJvkqqXjmddxCikZafwUb9cmrDi7jsJ93H7zpKvWoZLeBVQayLrnyRAxvBnUi2vJ7UYi5",
  "key10": "26R15J4RYWySQmpCnmqGwtJFvCg9313Ejz83TZZg8zpRUP7wCQuhiBSs7w3d8dWLh5Mib9Yayxi3GBd4zu2qbB3w",
  "key11": "5GKga2qQsASZnkpdwwBQ7a535YLd8Y28vu8q3fExptpkWLgzhDAquGofcAogLWWhnRr8KxNE8QEdYH2KS17Zpejn",
  "key12": "4hMd1u5JA26at3BLWUUxb819VmyEYNkNr9QyaVWvdn2gegrdVjX9tJ6Dq8RwNwLPYrH6uoA5JSbMKnyTzUrLZUqt",
  "key13": "2D6njkLpAG791h7fqwcje7kwmtLMT3sBo5CeSPocsMSpE6pufVcBWnkWY2F8jVpXKpPhnhPpJCaSADsH6hYJFom3",
  "key14": "DtuUDKyjVr4TqgqzjBmi6oFNRhk61hHufKZWwwhiZpqQMbFnhMwaGEr2tfZcBHtEtmAWQuGEAff6pxtyRzcGVPM",
  "key15": "3wN6vZ2FZLeymHY4G3tzRSnR47FSKRWrJsz9NHndVQ6Q1RwBUtqAPk7evnvWdSkUj755z9uN9Y5GhRUYPDEs7n5n",
  "key16": "3UBrUq9c9dvGQ29qJsbJTGGP2dGaXJ9dw1HzdGZgarSnzAZEJ3C2iiieomX1P1Zi8T6yu8sBWZ4GwNCBWdZqKc32",
  "key17": "4TqsXbuRaXKwSC49hm3tubB1i8XxfFPNBePXKpa1VDmHesPXeYMAQZzWwpgfesddc9U4Nri3e3dMCQGmdR2XR5oY",
  "key18": "3BEzXBHN8w3MWsjJZLkrQ41LQHQDaDd3Wkmd4sJew8zkE9UnsT7sEPX37mZ92wAvmdSf5JfGomfJ7YmRmakZVJZq",
  "key19": "U8njuBQKwEb3c9sTgJMyQg2VvibK7dnVnU43Snc8mzaKuCURgyk1iWqPwBdqSnCiXr2t2TpPSZhH6wWXqrd4Sqv",
  "key20": "2CAcxuVXTShiLsThWM2LHv4H4MSFTTrm3ozBLC513MAvt1V9xaeyf47Cd5GJYm4LifBVzoETb3FTs8cEuAjrSP9F",
  "key21": "2G5n8eiEv1Fv49pMoL249EbWAqQ9iEk9AGzuVvYP6QvjaXwQ5iaeJUffEzEaJFiLSj8kWCRqVyrcttqyatgArPBb",
  "key22": "3phvjMbptSus84eadhtdCRUi6vGUAqmd2Jn3sofvMo6uQ2uapvDoUKAmELAciHpWyz8GerCYF7S1rGB7Kn9jGYXf",
  "key23": "2tdKoWAiK7qGgM8JWUxMYrivd8aDmU5gkmvre3B5ocyX3jtLsYiaz5ZYL8P1KcVbGjdJyB8PguXy2QMjkU5WgSyD",
  "key24": "3nWZDgrPsZep78MLcZF4wu57pqrMruZsN9Jx8yLGq273mNbD3go9G4XW6uHEJ9HnXqxSXMXW295GjD5GpdpcyaVs",
  "key25": "5r4RtdgkugANVrRaomAEkQ9DJL9DnhwEdWEohHH8t3aScga8cLNu1tqStyNTHG2HMVSvdFG5XeoFMgV4FoJT6L2X",
  "key26": "5V8BSsxzyZNTqGVePXTVXFp8WX61TBZ7AUyDmZQxHuXizghezV4FUmhC9LCD3eHaqqJ3djvHvv53ogU6XjdisG6u",
  "key27": "3Gp4nauJ8SusD3BXCfhX6wRVfNhrQM4FvuDwrvFPqjcvzNUfSGHFRgSxctjMrXv7wfsN43C5UWLSS6hF49NKruqd",
  "key28": "2NE3QfTYf36PbHB1ZiNM3FTcii7F93WMHpreeFMJc8ggi2F5B13BXiELTwS5XtKn2RfdJTEbSXL1EgitkS1HQjig",
  "key29": "5YcLftEPrxpApvRQsmCgW8v7P6NiYNqysdGv4YvpV4Gu5MLudcSKz6Ghu4Kt2qRKSwSXNch1Nrh36XPG6RF8DZh1",
  "key30": "2jNCg9hHSVJenWdVxR2YFo8xQzhFWgJ9dYnEAhBhYi18PhX5WWfUe9rwBRqyw8Mf5x4hssnUZFRaknzDjBjnjt2A",
  "key31": "4Q5wyAnzL2eLnAFCwTd4a8YG7xBAQZdpLZGn1VDCcm3bYPNnDrHHm7T3JHPT1qWCHP6BeRbnPTL84AJDV8cHE7iD",
  "key32": "59VAUPK1k7CQprSzVqARQdrArj83HNcc14akLx7Fz6t9Te6EY7z44rGWRosQqh8poS9fVigEk5nijwB7255Y5Ezc"
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
