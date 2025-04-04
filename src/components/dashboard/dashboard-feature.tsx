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
    "5GB4xdfZJzZ8zzunC5q7QJU6pCG6ucqwSLX2YFnt62Cepy25JeVa5SRfHRpm5jPaDGuhd4uh9Z38SYw6KYJSW3Rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PtsGcANb4A2o4f3TFNNCMCh7FZYcjsahxEd8QUcuyWoAYhnBy5VosTXArgXbbnzhaoZ9Z2BgJJFqBAPPHPDN2MP",
  "key1": "2ib4Sk2MyXnEZpn8iGPTvWpG137Xe3cx26F1M58wvfeBtbEQZ393ZwvFtQE1EMfHURbAU73tChRTd26TVBVuH2U9",
  "key2": "3M8ns1QrQJAiC8tjSoPvV4VCe9gj5dUiiaDmFL1jUj4VYkaQSNMd1hS2KLxppniMesyz8N5zFmvYXqG636oTRjtx",
  "key3": "5Ls311kW5fQTm4zsdC55QKSTxdo8uRPzw5VXUReizAxeSqkigpHEQ9tFPzxKEX9FDCveRH4TWNSvLMLg7kFknKiL",
  "key4": "2NSbcVj7UoCEmgRtwDssSVCA4EJYUw32SUneGsBMVphcD17Je6PDEywXuokgzvFqfEWVKwZxwq3BKrtWXZksTLmm",
  "key5": "kEEpLfy5VmUMaabxPvAAc9xtFLmTzrK4A2BLFjrnX7czw8FtP2EUN72V4TZ5kEcehygWk9iTMUQ3LZvVS5axu5n",
  "key6": "5ELy97bkdqefWe8WrJbpEmuQyjC1FTSwbmAMMfzyXUJ9TBzNv5UUeBMCvrBjFSCNxgXiRMNnyCNNND2pJrYVYpK8",
  "key7": "41CEFk3SV7jG1tUdFaw5p8EmffpNrBpMenwRdjnAVPb95u48bPMfK76ZSCjYmLrPdotmz3FDSHdhHLjmthFxNDd6",
  "key8": "43yAXzfdfTft7eAnjLxCrMsyAMSUwvFcbMKLiFaKY5XZiydwnvgCV1duSq6ZgBZ7vTop3S6BktJRmqPoyCvrWGPe",
  "key9": "5y2adHttEimPs8DxNzkQqFT66rq24gyuNtGSGfY3RT6UMHrTsEpx9yHkXEyUqztyG66xj5fLyMqHNHMasqUAHgiM",
  "key10": "2y8X1HKYU7M36KeCFHLpMLbMwR9R8d1CRxSksvaKSvovxg1z1tmyT1gV1SgAeBJfP1dGnhFV1ipFomM8sjuRDqjV",
  "key11": "5Ay4T2t8sZTpiuEEDrJM5T9KM71TwwMU93bv27hNBnxGNQqN43swzhxC4sZtqpttzWBHqTJyCDXgxMTozY53PU1U",
  "key12": "3GqiR79yizkUCR9AgKN1eerrqsgou5oEFytFWYRywRmUxWcrTRCvSV4WVUr6wmQpq47bqYtArFqdnDpXWc9cFoUJ",
  "key13": "4k1mmAYX2oKAgE5BCZYsmpLpnvB5K3MiryN1Ayy2uxjgeEmh9P8nXMcnM1gpEbCHh183FS2GpccQgWiQAEvbMSf4",
  "key14": "1vzKHVMcmAUsJm2T4dRRdrdKDaeKJELB7x9tsrpui9MuMWCRz7QHCouSz4c1THzMB6LRQqACHkGbVJxWPGW8EtD",
  "key15": "2BESEqZHUnKaRqyDE9pdTHWU4NpCwUwxEqZg5Y3qYjx2oBhwSHK4Sr6eqqMBDdyhYooX2Y3uY25g5ntLQvu85dsp",
  "key16": "5NuuwUTKCssenXm6qDb53uy6DRnCzsEq56DhUnhhm68jMfEm176sxodND1xi6DbPhZBJHFWFCpmL7RH5Z3Fq8r4G",
  "key17": "5yk7eaYvHvVbbBbafi5gcZRqiYVDeLnE4zR1zGyZzwTB832mmJdVkAALnddYXyRPAA3ZTKnbeVh9U9SYirHPchmr",
  "key18": "4pEGN24dfkp9Gdo4e3RmaSKfuKybKLxayrRJW27kt73Nuc2cjPEDskgt7NT1zL8aNxFS6hYATLJwkN45dQWRTGmn",
  "key19": "2NNQNByZmLP71WjtAw9h66CE6zDaSNXgZdd4wq3UBZyTXzpPBMeZtUsGTj97fLV8Ej82sgFrkxZLsEkvJncZ9UFb",
  "key20": "6fPFU7HUp8kKRTFu3NjpEjquecC6VyjssSUGhX4si2Qh49FdDoEyq4oucWZdF4hA3ydtXrNP1T8wUcNKvDu5VU9",
  "key21": "5JWqr8uQtd84XSCDPtQajYqFodjkBht91n3wUWk6j9NgEM1B2uY3x26kMEDvd1QCRH153sRogzoRoagjUgQpaWiL",
  "key22": "5nUcP9B63zySR74tgHSdDiingoxLLfyHgrUrm95CUJSwDtmhh3fv738pHKKVAoAD7qc6kQvWtQbu64Y8rVWBZvr8",
  "key23": "3qdkRePBx9sGc4VsnDf4394dAHfJ8bDgu827k9eN3gWE7MqdSdh1ESpjphmwDv3iX3zvAZGgu6xsGadjG97bygX3",
  "key24": "67QaBXaVReXPPDXuSVfasRE4yc9R5Z98RxkXgAuZBKUs6H9Cyf3Y9gA5PkK33wE7FPYuANwCbnJLptN6J4iMHmAk",
  "key25": "3uUoWZ6HUFVhgGuM7rt6pfBJze3EWJxcdQ1GouFNhJYagX97nnssbGXfEMp7uGFMwUUztYC4DCdiJb7vvvYW6UDn",
  "key26": "27ZwY2rukhynzmQMfNhjmCwSs4RDfYfgmkWRx9FMJfz5nnm2iCLmoFqpKd8tmCxus1aTupKURiMxWTS54ieyQ6L7",
  "key27": "2c6vPFb1Stdq35wKdfp2JzdeAFTzTp3Wg2E1gApUhvSnwVUac3AfJxkhrBiJG1jqhk9Cs2LUrsAH4hMQ22mAXkiW",
  "key28": "Ac9fXdFnjDVvgAYpGkR84zpyu89ABS8JgA9pJ2GYK7yXEXJ11QJ9L1BhegqPCM554s9rkC8gGicHb13x6KJgWcN",
  "key29": "NqV8Jd72q11f5tzfwywJj62iqDDxdq4VzgW6mKeTMBFSxHycrz3Agv3ZsmA67eWch3xWTgtYT7WHmGuwgfnPigv",
  "key30": "ZVtTTSgRsgJPZ1nLECSVbH8F411MxkGZerHsQnJtgRQtmFXBYBoCtHYeYdXbFbRHutS4hWjREraMvEdhbsjM6Lp",
  "key31": "2uqUFSEAJfWCStNZRExa6i8j3XApkQ42PzUJoNEb157to658rhdqyRvwRnWWL4zLTVz2YWYQSLWRiTHMWty1c76Y",
  "key32": "3earPLDURz5bRMtcbxy9w7gGJrAkZ9icD3tJcxtg9PHEHeefEaoUzm993ggvg2dtiUSY3sDuCyCAeEroxCn6iDVo",
  "key33": "4qZK7FXi3hXYU1fihf6REkgnA9zyWLACfkPeu3LJ2WtQcA1CWfCHdK3fJrZf5acoM9UsZorqRSyCUXHhnVFT7uFM",
  "key34": "zjHCNbbXhXGDibgjoK25jGQ9McMgivRTTBbneesUgQ1SKnyWjyu5SLpkwujTBxCg5Z5XR5aZieevmektADnoWwt",
  "key35": "5FQ4C6FU3YiMsmgzZ36wXpC2HR7sZXXt3Sc8dWVFPuLaAN5fLaDTfzRSJfj2SDMc1bWwjq6STfsM91BCowXhgJkT",
  "key36": "5vnTQu8wYBumj94PJhHBKXGrY1SojLbZH1qK66WprkK8V3t4YDzyamM1cQEvD6GbamAi5xx9zJHr2nef2QRs5332",
  "key37": "4xnKhrKcRonZQ87mkKetnKs5279rCdsGBkmCqDYSrNiJKUTJ8Wjkm1Z2fbeiN3q2ePMhn9ffMEq2HEHLFVbK9esG",
  "key38": "5mn9K25qzWCjxdiEb8y2wda88xdF8JH2fco5s3yEWEAFE3CG1mgNw3vTgufFtRumCKEo1qswMqjkdi1tqJZ6KoQR"
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
