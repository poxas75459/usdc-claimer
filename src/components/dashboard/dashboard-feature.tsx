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
    "4sH72a56KKvZFstoieLudYSk1NkdLQ6tf1DxGzsp2k8hwynLeATQK1xAMzTZfDoVQiwuxgJGsW5Y9KtHQ1msZ6Bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9qp2SM4gJSiZSyiDKij91c8yyoXsbjNP72ZVcHsvxTxooRZHiQ5qDNoYdn5iQaFuexyTRjD9VAMTEieq9XrDwrW",
  "key1": "2iVECyauecFCGyAnPUdymjrRk3A6VwVPWp6JJ7Ms9W7DVv8xfZVJ9EsFVcAcxusMYaaR7gKbcd1TMjKoBDXYp581",
  "key2": "3Y6y2mbLeK6Y3BpFRyd8NXdqWdCxGryRqSR6Gw5L8eAtJCoJQLiM561vnLTJijpiP1WpQ38gMaC1gbfA3SPshAwT",
  "key3": "59ztJgoWLTdEyx1eqijTBErYx4XBABpR3ro1bGLt9Py9UsFd6UsMc2vtMnLRwvCcQypr66JGPW1sr8qwNXmGwRKA",
  "key4": "4yRTqxvMAmLE5s6TUj89rJZegaYNdHWPFoD6S4RFbU2DPawLmvpBvCcUPADRrZALtNDq6jUEYwgofPoecn4jQE68",
  "key5": "5Yk66fp7JiCkgb3Zu3MfFTtnfNV358MPdfeBdw5uxD8Q3jDiLSKVoFzeABRbzBJ1ZeUUUJYqC3zXXyVbiWCow1HP",
  "key6": "2KKzeBG78cEy9Swhyw1kLK7BXuHK696Y2XpCbD3BaBzBwfQdRMHh62bQLhLhnEMu4gj7rEY6pSJV23euTdcVY37d",
  "key7": "3NZqR9isc6R343ne67iZ9dHwRw4WhN4NwbRwJrHrPAfBz93C5XtnBZGSTj1nUHBWmbhEWigZ54SKGWGyh7vnD7xZ",
  "key8": "3ob9kwobEXwxxxh63EMasegVGcsCmcVWzdhBg3TEPKqFYSPGhzfjHhrRXLykQmDZAyzWUWiemaUCDaKiseMwmraJ",
  "key9": "4G7Bs9ycrwSrunXsQ8C2zRGVbq6i2W4f3RkbtFstHK9NC9am5wFJdKnzUu587NSt1NobyGi3YFVDGfDg1TBaARkV",
  "key10": "V2iQkZqqo6argZhwSUPNF8hRijbH84uBwnGmNXCMrD7GWSh4nkcbyDA4REmQkNWiS4Cc4yz2t29nqmJfgowsTMQ",
  "key11": "5YeMHjCmJ4VjQgXmtLah75c9jGxquiztagDB56KRQrkXztVjv7AxywNUDaD7dGJWTUfJHRxAxBpEJK777pZXCcXM",
  "key12": "J6DgSNTf2tRMnu58fijRNZ7F2EAQoKvi4bW4jYFF5tSotinLnvqyY1YJ7aRTGic2YJzLZ59vee6e6y3MZ1kx7aB",
  "key13": "QCRgTQy349hCq1nwZ6gSTzVd5GdSgU8yEn5Cx2sLYMR4oPDVmegLJjtG4shADzuMywHkzWCA1X1ZEX3aD3N6D4k",
  "key14": "4qjz6QR5KaN89QAZPEqfeffQKzPXouzq1PqgonkNUp7HHrk43DJktSpacyCdJeAdRv69MCVfjHvddFXt92duU4pQ",
  "key15": "of9g2nwLcbtg7SRi1DEGPMvaBdyvAv7Xt6g53qssxujNRhtXuimPAjLBwUPonRm1NdPLHKaZpEoBzAbmx2oDemi",
  "key16": "35bonqSeeD6D9d18yARneQspWrTzbGkvSrystjeJgF1WehPUsiNCTJvM3HR2nrmXe1myMBEjzigfb27jx4LqSThB",
  "key17": "5uAmXH2ifSQTCjpgBBDXKPXBC9phTSrerGzXhjNbbeRSEEP7D4SoKWJ7bU4pDmiyamBEfvQVqzYJoKUh1MvyH8X1",
  "key18": "GgLRQj2hqRJVpiHg4LDQufUSdGnLPMBA2oYY8AvL6nso9gWgvsWJmQPTMoVEB3uvjFpdDkCHGYkBETu2vprvCBP",
  "key19": "5ki6CQoU5LzGBWwinZWJna4kg31r1BZ4i8SyG4ZvSZ4XtDeNPDpK1Lzt7skqdMU1TQhAKmj649WszLRjSvdpyZW5",
  "key20": "2CGNVtKbYMQyNGhstAK953qUzya4rKcsmDRW5JCfP5GDv84GtBd4P2qqMEpayvRjJEe51ZXjDGqJHMkTpegquAbS",
  "key21": "231BevJPio6jeG7rfUgMqkV3c8YtByMDTe1knXweQ7L2237UwckLrefoYpY84eF5rihM3XhJNcTKfF9syU9X2dMA",
  "key22": "37tQWV9iCrvA4MkLjjS1xcB886jEwhX5AxdFvRsDGbnGg2utKv8WojsCJFhvRd2suFFnvRpuGgcSin652mJnJZjw",
  "key23": "4VDds8tyCGHypjhk5zKtyGb2tRC2J88LKGF43HKpjXWjE1CEit3mZMAtwdZ57pT8zmdhsJxtfb4bML7mKx3ESGyD",
  "key24": "3WoTchL63C9GiCoBruTyaNEXsvbjL5tJrLSJCssqxDhWKa6A4BtP9uRN9tVykBitudWDfh3yNpBvh8wfpugSemkF",
  "key25": "4zSTkKnNM7DsB78HeBozT7VP5CyJoHSzDwqaArAheJV9EgpuxRWMrPx91pY3Jjg7HAhgvgo8DHJZjqzWYH4rFKKb",
  "key26": "431Bmgp7QDJoXX7CVaNLKVqzGhviXCajZUtjWkiXb1tZ3CRXkWKADDdRXPLe4S5oXFYGSwtABdVGg21Hj6zEnDnZ",
  "key27": "3R4Zi9CeZgbT3BKMfGEDHtkHrY8DzksN6Mi9rqYgyNpRRN6hJC3TWSt74TtmmSp165BuoLyoH7ZJXRA1cfwDTauD",
  "key28": "2LS4k7AoU6jY4WubaQivbxxm4R9TypxDJ3SJ3Y4e4CX9LANuQSoQRuBfrav5SniHL5TTmuEV1sRmsViiwyrkpWj7",
  "key29": "2FEchMh2avQ9CNCfqVDzEYd1ehmzxyEi7vBZwy18CzCLyeAzuxkDnV97RYCzFFE4TXWLqgrpBAi2wJACtfXGfSpH",
  "key30": "4CfDQ75vvk57TurAqTiacH9sFLaPWap3AqytyfJEmVJHGrgWBi9E3LopprPk6zmSZ95fc3ghStBRw57dukvYvxxe",
  "key31": "ZVk8GtkeikHVizizYBbDRFZQQSnKyR2dq1xrKQFp3xPHPBYHB1aD7NqYR32NegjRXoNpDW7S7BjNfymQVJ6K4Sq",
  "key32": "3fJS8X5sxGbzWXpNvHpueZ1Q1jKU9aTsMyRsEQmekRH7HJM5jCfosjJWXi86JkSynXN3Wusg9v16fYRY3Nabuxhe",
  "key33": "3aQZt7ZJgkZW53nQr5gKiE385XkKtyJZ1HZW7SkQNH6LkmQf1duhArUipiYiSxtd4132oRJGHDSXxRPNFyqHM6PN",
  "key34": "ij616A6kZQCa1voTUtKNNbsBEjgNS1WwD7uiFdTbEucGVQGaBFoPgjmyseKV4Fr9fqbyn3AT3DzHVhLCRkNBmuk",
  "key35": "5QRo9tNFFHCSFgLJxM2bxthdRbr1uqYBDKLnJjbaprh1AoqhxN6hgQ6ADh8sFXc8zEbfCuJXRokxTf7Mxyi6ACgD",
  "key36": "3kP76TrGrSiBdab5LSmVbj3f3gzGqaDTnaqnVanm8nA1XQsoN9Z35mqVEiPp7EDGF7qJg2DroBZAvBc4h1EefC1i",
  "key37": "3WtovU9MrmG3fx6ruDX9q4C699rvuE5L2ygfvetGDQdjK3cpermhEro9c12hxo4bEBR8cjz8rScbQPQXVutHQebq",
  "key38": "2qaqUUqBmybWdgB7p8xPdhvZ3Je3AM8qizBySTR5YnCzbKoZh73UQ4jw5JLV3ogmGEK9x3tApXVrMGLifazqySL8",
  "key39": "5uSgxp1bn4TkDaJmTQHPbZZj8PsLvNaZFsnjuxFvbX5Qu8s4HLUBXhCZsnL7zYstz9GZVfNo24Rq7XKNARJSRrSq",
  "key40": "5phkgzCQZfj3DcFojBXUBqriT4bpvF8oNfoYsLeVBXhzik9BnnJ2ed4vMQ7DwXaYiXnZ9RdLYMaFSuaPAd6Pis8W",
  "key41": "36EbQLNRu66geX6ACHWbsazB4MnNP2XBHzJvbRdcLZXznWzhxVLcLVsbnnCYAuKvbPHnvsCJYU5M1q7UGbQuu8EN",
  "key42": "26C7bZnfoHUNUcdc9WMFSAgUtY5Ywo1kJbSLbA33gzSn5dztvzZXES7uKokA1Wy6fqPH5KvR6Dv3WZWKRPoTRJHs",
  "key43": "43Mg9wprRBF1dgujagbQA8HMyxTSXZZhGfTdhmrRNZLSjFgnPJrvYnvQEjQpdQtEd8aDEFU4uEnAasowyW4M5rND",
  "key44": "46KWVQcMvZ7oVLKAccYoWvVT3BdVZqKRrPkfQx1n7FMWP3q8phagGdAwQtvGHbou9zqyKLaAZ9y4Kex9PhZKF6mB",
  "key45": "4s1xjx7TbBinArk8C4bpLJ2QEpdx4qt8ZTByWFozQQPyE9f7xF13JjAbMY11NEjpCJejCog5M9ew8HF2vVG6jsD4",
  "key46": "4CYJiLK6mmkz3Ex653zBryjN1c9G35gte9a8W9U94TY5PAeUWBTY1vFbhY93smuxm9eaNBjSULfEpjuwqdvNcDEz",
  "key47": "3RyiPeTpcvxN5qbW4H87VEmDSC7TdAsJ7JB75mQfSjc4v37m4qFXsEiYF39hKe2aMjHG4H6ecwr7Jc1EQ1HgVDeY"
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
