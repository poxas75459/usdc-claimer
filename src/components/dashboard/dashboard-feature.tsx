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
    "2otmv1YU5xP39NNMyM1oSWAHcoxPC3ronxFqba1xsFAp5p54KcsXRyqTAcLm9HNgoBT3bFPW2w8UL1jusGSS1nTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EidVDY4Cffg3EkMMu8tBHiUJcnK42JHCoQLxuRTxeA1eDW7RS7BSycgaRGSFWunc4dmaANZ5ivnCEx7MZrbknoU",
  "key1": "3wRgoHtwvrnU8Q63g13eP4rVKngHuZ7ZRSdoRHk86N9Ac2DyGjYsHU8F6iR8dHjikJQN88mdUxaeQ58dZfPU7RWs",
  "key2": "39cXckpYHurcZL8jFCBTFHbf8QAB56BZcpNHZm2efCsQp93yzrXT3s3LxTRwTzHYf8vwpwcSVA4GFTzw9Drya8Za",
  "key3": "iWij3NyB7pnsQEVV5Ts2tQXoYXx9tkW9282drpCkzpZPySQ28LMDoBvjGgYE2fcmsfjun5NZHyThBk48D7L7X5m",
  "key4": "oemE5Dc2LhbQtvFsAd31NQTtYDE1AM3YqHib8te3Zpboz2YgFn81179qKFR4LFCJjd1aVg6ptAdiLPJgvyzLMkJ",
  "key5": "5Y65HKs4SNfwiE2u6bQkzsY9i26gp8y4qq4DhKJajbiaWvHy5Jz55tqT1TQLDMLYRshf9JYPAqAWAJmHaNHJxJdq",
  "key6": "5ytWkcPy1N9tgVXCSGCDZNgMakcAjzC9CiLCUZ5aiuQ7s1jjpCD3WsfZtEfzSZKbEGDiC6GjuoXCLZPQoS8DCUog",
  "key7": "5hKejcFjHLE5MfSZZbrPjkjT3QsgBQWXXRTKLyZRv9fFxH1wTaPxTtyMM73QhTjQndCBuvQFp689mQaoxcDBRz9N",
  "key8": "2FZoz9MNNJzKcJ4H5Te7FULWBVaNN6FanDZ1advXJYtVxrmhZTwn7gpLyCX7uf3eN8VacUoaF27xxsQn5n2iFBc3",
  "key9": "46S1gG7aJxQeMpyQ9NDNsaj3huPsgEnMivMdKhojy4kzV336y8KTY7qXP33Fd7kAoESmYoxU9ZgisWdeTxdxFD3S",
  "key10": "5b3jrT75862yZnPA5tuZX8HiQuMoZyMZ98ovsCoN9ZC6iH4ZyRQFSp7eyc4kiTroavhgtEnR73XhqSn11G4Dr7si",
  "key11": "5f5JEh3kCU5gXU9qawkt3SPNPNvJ5CcYyunTJcFHrPEqwjtRbb1jgCMM8afmvPc6rmWo5WL3MKUx117fR6P1ngBE",
  "key12": "vA2rbEN3PqTam8yRYhwUutaztdwVdi3MBKGNwhgMb73soFjA6Sr4VPAnJTKB68TDDGPaCgjTD3h2kgSby65Gwmc",
  "key13": "4dibPAuCRzVrwdozNJ1HW93qfrA3HuV5n75XNYPWpBzqixWUsU49jV2ZpDt4abBXBJF9Yywdp74hW3L8fbEXNAn2",
  "key14": "pkHmULG17RdD2GAmvnEVxE7HMyWetewiUNxnegeKWA54wqkFXs5cAX7gCrbuZHU5Nnvsx2pHMe9beZT3TkdgTuh",
  "key15": "3612Kw5QT23vmweBntJrmH43VVGQ35KD7ghoqeGCdZCQzuWB1bNW6ic2Mnan5g47adqFNaLigAuesCvXL3BXjqaQ",
  "key16": "4wZrqMsjRwesjSWosWkLuSx7AuY7xKG5ExiU75fphaPD1foFh93j2SgeQg15Y1fG7CJ1F3FRdHbDavpoHs8p66vk",
  "key17": "21K3rVkcG5HhrFd8Yeu699abGcCyRMzZtTnPmj1ovfiLkGJ3UvSYUbPy9zwRspv57G1b6ScEGmDwGWECH6859q94",
  "key18": "4dUFAH94ZaJnK17z4bsaTrJowZKuBdbyAFWgwPL6zzQoCcWHUYMckkeLXWTaV3bzGWXkw72mPxWkK6hAKeDFSx6s",
  "key19": "91r1EXXG9z6adEGyTz98QF6XuWfKDmUrYVvaNkraRtuLvaAcG6wSvyYWarkoCGVS9u5QWy7Y2TSVWhPQEr3KAN2",
  "key20": "3J5WVRTgcNUsZk7EnY2n2Ck3jLKfuExeLU1ckSkqTTCWsQTEianq7ziP8DE18yHNrSbWEWq4qERLDg3L8qzoesU2",
  "key21": "5NingCBf8dJZcS6J7qQSrwKyaUVTS52gWsCmhxgR6W6dGzyoVkBmHsmLwgsyvzdJ9rCwzAxQ5C8SGpTDctg5f3Dm",
  "key22": "2Hw9h1xhrxWm7R4d8jvYu7YWg2UdHupCeHTRozPJ5GxSAHRsAxkJQZ62Cx9EbgzRWsXyy8dBm3fyMBbistRadk7t",
  "key23": "5YKLGDShZbMsyxCpeVAqtzSJrRW1xL6uKLyFkEkp5PXniYgrnZ2svZAS1H29DEQncU9WXNszEm6RG51ht8RYWugA",
  "key24": "2zxHPBXVg34rssnSVyje3Ta1HAQad4q5oXyFh5tgZkNYnyHsxHMp1wBu3xA44yu6AR4hgVMjJ7S25xmNidWc6ne",
  "key25": "3Xnvew2ZHiX3jAw5avwTM49NLZ19k57AxL9pAsnUP2MMoNiZE62waFa6CmBz92FuSEd93hPfL9CdLAzHJ82dyxsn",
  "key26": "4Xs6cT9kPnUecf2XptJUYd4tDbrEyvmw6PNgdrt92PDLfsJs3zsgqGoYrDdy5DQCW88Jj52aCYSF6izHq6TxE6Pu",
  "key27": "338e1sohMLYu2t59s2DwViFgmiZMehdGU4ujeQEwGrYqGvLDaQq3HYWfJzPfRyaeQaDBVkE4TcBVxfG4TLhEvjMQ",
  "key28": "2mjRzN5czessJbc3141qV5UpxEgiRC4kMQszSFLV5HomQirHGvcV1CEpZiKXhN5Gtxh88dgiU7qPjzAAcLBMe4jC",
  "key29": "8Rxguw1N7cfXg8N7rJyhNMTyYffEhLufHZmE9xAkYtjtvcQCyk1REYxw7VzMDgjnsSswwuaW6oxN1vZqAnmatKP",
  "key30": "ANRa9qAN7oMgxH3vWpCZRC3wr5pPeuzw5r3w59YEhfif1y28LsxU3cCgcQZmKULPV3cCnS9xFFrku5tMyPSMFvd",
  "key31": "pbPMU6GHMigKMx7AMBwgSYsuxwj1jmHdBqyrYmx1h2fZ1tUqyjTWqpQPk221nEf7VoNPs1tTaT33mLR3YVxmSHZ",
  "key32": "3TLM84VCR8ueNA6ALww2V2hdpdYzJei8XjGvqdNUKL2kR9SvgtBNdvnTTLBJo2vkMER51md1k7FqaJ2kJzsNLgtT",
  "key33": "4LkyiSX3LVFEE1Yci8ZC5BWkgEcN8UnfoEDzAzoVMDGWSkBFJndxWopJ7TBPpJduPVokzqy1VoTkzutS3qF374Xh",
  "key34": "4mksS3L8ki9gX9T5xAux3RuTqfnSm5htod2VWb2BQZAECijC2fJGR1yJctAa7ky6yfYxvDUzD6KswudFKEnsfZk3",
  "key35": "zMEz8qkj3PWLxfHayotz3cG8uwAnX83zMEF9D6NQqaFfh2guwDAfMUc679LmorMZiuzmeDFxmNhp8tnF4xqmomv",
  "key36": "22aGWq9Q72fzMHyvVdCpTnbcbqUSJUxXjjcmNm4SmXwuqP1JV9CEdQaYB9supcAoS8nXXR16XhmhAzpoVGcvCrVk",
  "key37": "2avcymmhMwVmR2NBiYA3whtueWdWJ3Q2rGNxoyKxon98kK4WUte4i4v2BmjxXCo37fPW5LPgWLpi9dZsMJQp4aic",
  "key38": "3VeAAo4DzSNymyBWHa5b2DrPzdt5nVP5hzP95C9Ws1pUXMgSnRPs4erLHrgi1365XfcdQrRym8yQxb3VADKnmzp6",
  "key39": "2PkKvGV3aLbVj8LzNyKhp3gZewfVEv4wsJCVe49HheCRkrLsVhdm3DQZxpFGGAgQP2GTvxjPe9ymStTGtnBy6HRJ",
  "key40": "5xtcUq9974aybieBBXiedbgiC8aQUQzQKPgdCVvbSZHgd927jGqaHci1SupYKKEjyJageUAqfx9fyqMKgg171bWF",
  "key41": "2BrjQzqpV6HqBs7NUbJEB2WGamN3BxYYEsGaM3M1wc9kaoJ7s2atxG8eG6vY7xCipE77phb4GSYUwnY3xjiu2u4W",
  "key42": "63WQLG6fQV8B7Lh4uLmyaWy6SoGujQ7UEapeijN3nNzTwigabBPHzxT6KiEvSUsJirYjTQtbqMANoBSidPPdMkTj",
  "key43": "rndXdZhqhULc9J4LkVRey9xXm7NVzxDSNSiNfC7iYsVnGA2ENkvaUEoYskXbREoX5Tf6F4aKYrXBuXNJyazURSq",
  "key44": "4q1TRZThVA7crT2iudFfytAhKmfphAzptADwfVM5U543ApCR2BiAVtQAGikXLpy2Bz8b4szYVuQGxWkiBUCmshXj"
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
