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
    "2w9zo2yeF3x4yE6L79VwRuGUwuDEuDodFZVJPx8THQ74mUdyAP2hjGoNG1ZgJYiLHBn9McfBf3JnLG27PR2h53wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62j9TREBgj4RL28eV5NCULmtBCTPrQ5qxzZCwBkdzBVoRpdrUdXS4EqNpCApqcihRHd6KCZxxf2ZREVjH5dwFiTf",
  "key1": "WX6JpLdaENch9VqxD4xoU3R4TZH4YQw89aQChL94sk8RoR5R4GqmcztfL7TjHPvdJXfjS7Ao54GrKUYoFJA75oL",
  "key2": "4NfHbc3wms1mfPs2Jtp4KEYYarGmpmTDC6jrXH74bWsmKqoMLUfD57PjMPPi3D2K17CQimH8gLaa66whfeGdQoDz",
  "key3": "p2prdrVM4GanN4fTMzuzZ3BtbasCRh9RAhZLQAvFk2UnEtDbMpqvWw5sbf66eNd1732NPjdAdmYNx2XPkT4ocTf",
  "key4": "47Dyvni4EKajDmBw6hrJmxYKk3A5p4CeBzwT35cHZbQLbwz4nTqEUpzvbCaGJX8LJxhuUe4pisnLGNLg9g9mQ8h5",
  "key5": "9GtXvEPBifGPXHM1epJjEQNPGigRQbgWAt8SXTzDQPAbPBPnaPr7t39F6bgDV88KPjaxJQkXoCm7jyKEcnXZ5Fu",
  "key6": "4FkUpfVnS2FwtUoqSoEWqcXHiLkyhTtqYkJCqZQi3vbnDSJPMZowTaTee4Sc8KnJ7bWhPuKGnfr4hDoz6C9VEZgB",
  "key7": "3oL5Lr5tdPYKNXXB4K7waaxs6tvAHG6LMPTKEzZTJeyoBoy2gVCiCMqDt1bsEs3Znd8SWKCeN2nhz3WvyvcrTmwD",
  "key8": "9aHYgF6d2WcU3eaKp54GcUjTnLNsiiw6xnptereoUcuEXFd7FHSPhwgZiENpgjkhTM9jSCC6ZPMHem5jv7WUtNh",
  "key9": "3zVE2Z3PxJQZ7gNnnhM2agWprViiEAt9UUmmnABUJ4W4KPhG3GHBSmEjAVpAuJF78YndJoe7bwsw3N9NjEpWHPwM",
  "key10": "4tM7huxWD8sbLSzytW6TADaTzXW95mSohFBFD6uvwN2SN37X2jTabJnnef5o7YNVEHbxpd8w6YzGesm4uUGLssiP",
  "key11": "2M3oUT7JrmGptQ36Zxx2cFDZzPLvFXayqDhWSnPam29na7ht16uLitkxKgmDM4Y6WZFepwdMzsuyBCJDiG43rE77",
  "key12": "4fbSzSt3LrfAVhDfkKxEmpPTZCjkRQJHWB8SwdV4PLFzqmPxzDgzNt6Y2XmZJzN1uXX4uF2vUPZG5zez1tsHbxgk",
  "key13": "53apC3EG7U4asj3E3FV33ss5j8FZJcNu1GRTwzbhfrH58VmKz2HgMqG1m9XgbP59KRoCdyEfkzRyvufYYVmtR1n6",
  "key14": "2A6a1T9YHpKgHQCUJhZhUAFiK2vtxD1KWQ5AaYCTtD6a7qouhN5ATsWG1uVTVvMBVXXYaNsGQHTSp12ME8FRm8hs",
  "key15": "3iRipdSgcUya3FTsazACMVNskMvjBBo79WhVvEHspAe1dgv3QShYKu8gExsDAoo2GmiGXrNH6NqC2QDFeeLzH93E",
  "key16": "4tfHL8FdBABH2f3QZCaKGbvGuSGDojTjbqHiCybiAr6nuLNz1EabCiNDZrHvr6wRnnSCMBwdnPni7HUXMRh4Lb2K",
  "key17": "4Et3nyMFAb5EtqkdczcUh5XsM7F418YarcEYp18EouvqyaoFhVpozjp5rnLZr9E6knFtyH5Ne45TuP4k2NFP85ix",
  "key18": "4GGpMs23WpAF4SyFYnv48HVNCcBgrdPF41UbYmEdBijWAMeeT6KBhc4PJq3CktmHQgidvcdwcrFabRxGb6s91Cvx",
  "key19": "4qWthAjQfTomtbmLmtzFwZg961nyEUKyP9zmPW5hYGaC2pFBmJswbaXUug8dLYst1mt5MWFQL5fThkckdbMTdCES",
  "key20": "jiueyFt37btiTMUXWYJW8jRh3JFfVfbdcEbaUHTawexisYdu6XfovLj3t69ttDENYDa3DELrBdurdUEAkXuCcYW",
  "key21": "5WgLqRjQNHA4dR3RfSKaNAj5gwmDSiuMcBJsNL4sQQqqttwrJYMEwuAjj3DfwBhjNWSJJKrg8nWkmkrbYAsSGuJC",
  "key22": "qfREUPUg2puWueq2RZ4hASAzsGHWPbhAtKtfZ8N15U6GK5u3cD8akJwCVYnLCnYiDHA4HizLzqxjdRHkKqcos7X",
  "key23": "52EB71HoxUgmiMxKabbscCcmKBJToPdjA8t5HgGiUCQYPStqL5qQc5eRcDjoefFuDLwKo8kqCGS5YEou6qPdP6oB",
  "key24": "3vQsjkLz3ph1cMBqGbTdCPYfBgpxNKWcEat5Mpvspvz5T2Gy3vzwW7kkqySJv9SbTKwFhQAJ5EKVsahmHzHYF8rF",
  "key25": "32jGeHThaET5n3cqqGWJ19k32d9zoMtNW7KteYrsRBkxcaAP72uiGQBNuPrLy2zE926m71n9XQfNLzNXFoNnSMfX",
  "key26": "5PRrw3F9QPPDK8wst9eqPR7XjZGKqyzrCEpwmJzsZbxtCT79cR2cTtmYZhFn4XCqkkMGurThTRisZiCVH3jn6Mhh",
  "key27": "2sN9DLWsSSctcNhkahf49LbuDXSg1J1cvcB6ryKshGbbYFxRUFzYi5CUGHW7BdBU3ScX4vp4G6aEeZbDWJc5Bwzy",
  "key28": "3H3kkCVQVgGfDvwiWkycC6gqAV9dksvdiQzEd4XaG2uKioRvSx8SobbfmKhhwdgv2bGEE4T6rEQyYqTS4jr8ify6",
  "key29": "5FcDDTNLqBn7VpeYB4ZAydbNWyMYk8HG7CNx7Te1YraMttUP4LEzp2Jis8BKN2EnZkcnu7ypw5t1JufQuz1AHTww",
  "key30": "xN69dBcve29Tq2pZA6Uk24gnWzbAck2CkE5UVhS5Lidp8U3qCfe5kTq2EjAK9zYUwsJ7XJ9q8ePeduB89GFcg4c",
  "key31": "56EvezSae6ASZ9CMXMoLqeFjJi3eojn7yh2zeo1ck3aVvfSkuxSM8mZ57H8MSapH3ZmG8qLLMYKEsFU1kUa8RhhQ",
  "key32": "2M9fLzhVqZoFqH8Z7mgNn8jQoY7a71od7yfvE25g4XZ9CWyWqMAngbA63euKTv8FYVnts62Vvven5veniKppWea3",
  "key33": "2D82eH7gSNCPLpiK6Rqw7gSbuknjCY8ppBDEeELGbXoM24whWtWoUb7ft7ZwraehLfGRbeWQqp2isbxRGi4eGWcv",
  "key34": "ZRAEVhRh1phBqZBd8MSNPu3VV8zFX2KxrnNStqZddNk5nMz6NTXTkRfP3Pi4cnWJz7X91mRbANkbDUMsdoBKcaf",
  "key35": "2tguuES9G4eBTXUViQq41T5a9TMQrQf8jGJs6eeQdSRjFTVK26LwJ8kx7fJFCk2H2TryXj2Gm19x3msx3HnjVS2T",
  "key36": "XQzfddZSHgTH278PTQGTAMbHVRs1v6cW5kCxfJq5uSrjW2zMT4KaU7iPzrfztJBBLpdYrM1iVpM1siwmx4zXz4U",
  "key37": "NqJE7EsZHHCzRCHhXZHZQzLqy79eQ7oWkbnxGkzcdUamgvrxiWRAcL8oP1fm5kifgwJ6Z8szLxRDocQTULo7sQy",
  "key38": "4NYc7fKrmwTRdAkLUZK79EaZDCkLhR6vPN8FZGNs5vwxZim7xdekT1A5NVrPGURSrbTWjGScpehwZaZqjbk5eTWT",
  "key39": "5wSdbnSfB4e9ED5jJ7xKT1yE3juK5sPayTnGLsE4sXQFDo7B8TvyyzamcfmhzipMYuTjd6hVMyiDRTixPYTKuso5",
  "key40": "3XGdRLjGXvkmTXbQa9sWgrokbovFy29em3zC956oepMWqzE6MGNyzkHjqMVL2MrfaqjfSTY8DynnUeUWc9bzExcY",
  "key41": "1TabPkozNMaGUvpy8ddvZNHqXBp6jTxVcZzDZucYUAbDVzXaXcSuhnorigSZCz9BK6EbbsvUTz5nxKFUzdpLUAs",
  "key42": "3sC3udsPptYf1ifRPwFeAgaLwcoHBokWQ2SeaTWmBSRY3CcnbqkBUQroGET1XXFEwerQEjM3vfiD91g4rkaLkMq8",
  "key43": "2UKSE4rULc4hQ12wZKp4bVDcwybfgoGyvRJ3AKUCxaAkM1Su5UX14aLVPZzhaAXs6MtmMCAZRyh3Ny812ZHKWKcp",
  "key44": "4dnZePpUtJj24x3z3kpdNTUr6Mt5r6bG9hUv7QTqpKAn9FjJygaefPJD6TQyTpaDvJmkwcdknkJwuUPgbgDM19pn"
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
