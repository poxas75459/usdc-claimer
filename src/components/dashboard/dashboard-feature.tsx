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
    "qMSujvxLNvcbmp8XhqZ6qfHHgG7tEd1a1bgr3LfYcMV112fWSfSBXaQVdLgifNK6kTwvW4c5RTFtMUutQVdtYdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WqWsLAMa4aYSnW1brQjSDsGgrHcVws9nxX9eeRftRQSqaYa5CAPzXAPgaKp7ddbg8qQLWzW8R4NEECqj9GrjraJ",
  "key1": "2cwPUTdchZTXDe75qDCPr9bqn9SpnEFfHCBHBZcmJ6cLJuuExF4Ds7QdVvDYqAwm9jDi6AFwT6djaUCJCdHsRZVw",
  "key2": "3xDCoHMmstTypCVVVr51VnepxRJJfdfd22E3oeTHGXMRE4Kjh9DSC8MCxtdT4uy46ivga6GLTCmZySd8CgFjuUKJ",
  "key3": "4a7wKaenXpmWfaQBMy2Q6sKE41NtWDe4SrD8VWvDTRW2wW52vJnx1ASCc7g6vgwN4H3pKuUCk66U2KWoxLPg4ydq",
  "key4": "2RnA4TztAwBe5rkmteeqedWarD15iezdUek3DbEcXF2ozugYPr69YffaEJ3dzFfTvQsFA4SojWr7ggaf5zvUor9a",
  "key5": "j24pWXHnrgVsoo3pu4QyW5UaGtafTnzK2DwXyjDCkMTEhoJ8MAhoeHTyN7FCM5hGdcXjPbW4NRoEBwQjhnvKuyV",
  "key6": "2APsPFsABxvWk3KhzmcZpVkbHNvmiQNHNvxm8ke8bPSkChQ9macrb1air2WoPahFatQf4ZCF5EUCXwSLSBahYgG7",
  "key7": "23pMu6HenPitAjbnukuhkw7j8g2omba3LiQ3nMNSdso1aSWRig5mRWkAGJGSTWfB6QMdvJmMaadAfouiKa9WUCL3",
  "key8": "4prVrESdaeFh2mo6DnNd7VPo2JcEYSXhvJiVkUWgRC5eSo6QJ6mHrsXrtB9noUr5vFeRSDoGaDfyXPhRH92aAJmE",
  "key9": "3LwQLkxCsigGtYA4MRNkJmtwRgRUEDVDHFMb2j3B49LycAhHUdcgFFUVAohiT66xe4c3ovc41HWX5iawTQqULTRx",
  "key10": "3ih5roAmFKJSw3Qprp4rfDgDdeyavSgjAhBcrKoLKFdqPkQsYRjrubLxzsmENbjaazzpa7MybG3dnkKLYjU1rtHG",
  "key11": "rNnUR7RDjuMCuLmTJ2m7gqZhHvoj2GHTQKkuYDs4miS7o96CfbaPxD7k9sYCZmvsWJfqZuB9aTHbjS5cAcivPcE",
  "key12": "K7gVtSxyZUAXXZZFNB9zzPZUb8YZnVTLm4WebLwgWGNXi1zcQXjxhDnsnun71WLg4r56gxLC8rzhPiqoWMZSvuB",
  "key13": "jWxkKGfwfUAmauZRyXkUkL5iY87i5tHEkfbJKQV7CEwqhTq91Y3X8HcdoAWPhwMdtZhB3JmrireC4Xep6ETcGuD",
  "key14": "56joxNqMGT5HhHQfn8LWz4A9VvsNdUEgrfeymPSLzxqUkrEq1kkaUiXSjx6JieLcgAwkEkvtfHapCV2BfFGG22io",
  "key15": "x7rsgju7KFwVp9YmwkEAV7U6hscGL9a4VzoRHU9A6Ctm65hvHRbjuU4oqtG2AmKzwGmfFLUAHgHc9JKMKWM58Qi",
  "key16": "2c6ofzrpVseRqSS2tgtSWGgb2xdDBjWq3iuTiWbFWW5JiVYjeqhUhV9vW7AyYsX8MJN3G14sA3vpRUQGXJLFNwEU",
  "key17": "4jZGuBBrDLAVE1xWaTxbpQjv6TNPi1WfSXAMseqr5y36MXd9hRHHRoypVDCmScC4EqJL9NEfDPS297r2LNcpt3pp",
  "key18": "3wqNpaR7f3XKmX6JDzEeYJN3idaj9zNUsWp5Tawt4MhKR9gFv7dJEKbfdeNVSGfUiwmC1gUaPVNmo7eqDWLUBs5j",
  "key19": "5yToFXS7couhMFe3BiDmc7Y5apfDXtduEPJuFEDYNN1CEzi49onaqF8aCP8Hricj8bduK1mM1Z8yDf5saXSF9UZ3",
  "key20": "2sMKNq6TtytSgbjMHqH7m3svGbksCk4CsGaam7J9HD1mQEQtwtzKUqtRUA92HSwnadsfxXL3cK5hNMsoxTEWR45T",
  "key21": "u8Lc1VNTCBc7SCG3cwnjtDjuruF7mLjvmPKGABhxHr3gvTRWUDLorwRtsgh76NYCtsmZTzashPrJ54s7hb66Pc5",
  "key22": "2buzpMidrrCTdnbLpqTGidXyPubBi1DUShqfgFZXCmnbiTmNBkFmNYupsrBgvNVU57uSTm7VhWXV213ynskFibdM",
  "key23": "52YLLQfX7U9AE2hxajHTY2HG1yq9uQkMAXYcn9xF839YkrZqA9Yahbc2Q6yjkXCzDahxBHRrbFxroqKsS2Spxr4e",
  "key24": "5E5KCf5pjgLekkXp9Tq42MyKGspHYg8pwioPuR527UvHkGGxGFLoRgtd758nvPHbWecpez7jiwthHns9Z7gmBw9e",
  "key25": "4xbR3w8zqFkAwqfJcvUQSfxR8RY9tYvVgQhcEKqDpQQUUF4PticHW9mq14VE8FmURYwACeHbRmtPo6qEANpPjNEB",
  "key26": "4oGefaLoSPH7cgUXGKajr2EGHdBdGNrZV5zJPAzqV5LnV4Sb883ApcMixFKUpKQfjRH2nKDaVuxMfwSgru6B9sQZ",
  "key27": "5ziVgBFbvAAYcZLw2VrjE35hyn33d8qCDzCpB14BXNuEFw2hP7KdE2V8aNmM83dhATmv9BKKcDJ7zGZscYn41R4c",
  "key28": "661pyFqMPvjjVWJDUd5FpBr62QfuKXv42DKBHBsvV5TGspickzRMpWg98BvziR2sQju1uJzX3HCjpjHBzhpfjEc4"
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
