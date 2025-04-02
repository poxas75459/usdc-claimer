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
    "3D8zEBuJEViHFpAzj8tsd8v7jMqaCXs4Rr9Nr2D9E6odqyD8t8JzRWi9Zr4pHdSzW69iAcUdPLmoc6AQgSwpvvB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q5Fnbc8VWRZ6USwwC8D9EEjfqYWZVUPuks2uoxWD8iQm1DDT4g9hc6dwYfJL544GrTayaXrC71tfm9unkefUFRu",
  "key1": "KgmNmDAingKXKSjmZCcYQx52F5FfLksH3KEV6NMm9qavcvqUBxFbhJm2rUcdyDcmABtSZBsU9cymACRL4vMFTHT",
  "key2": "2DAD2vFCHvUyaaWQuo1rdr6oupvaSZhiwQWXJp45LSTFV1Sj37kNgbwnWDUSS2NVmMfAUfsiHVxNQB859kiHyDV4",
  "key3": "5NbNzVP5V3dFWFmBAPpzAvCwL1a2YBksLFRQp1fYMVrCJTrStiR7hX7e2nPvhoMbcrvs3nPUYbVix2iAYcUUdwyW",
  "key4": "y9PfUHHE1npvpiMM7qpDwtiTRo557PsuqJSV3Dqg8ieuCJDvX8tEtCKbE6cQR2mZVBDLxTLwE15se5VV3zQwAF5",
  "key5": "3QtMjN53BmEMT3SrfWgwYoj2StvTDAFJtFYW6GLEyMKZq1zNFjdMeybdpWuW41WYFZCXHJqD8jLWNFBrj2HMX7H7",
  "key6": "2tgnRsiCWqF11H7dL8gWuJTcHhjmLTxCjygmwf9UgFRURqMknJj6HHx8eDjShhJJi2T9iVWJDxvX16WjNTmJWao9",
  "key7": "5VzZbCZPfQj6LcANMPSKjkY1CNEo7D3SauCYycVm4kmeYwUkT4SEakFvR4FFyoDM4dFCZKgQLYsNBCfmy5q1Jn59",
  "key8": "63PRfiQDY6e8wFerpYnzZjPWarW8JCohJa6TDAtZq61FRLjfMLz4bwNTzzhQX8pumSSSoLURaeXcpgWiUaV9ikan",
  "key9": "3yJNWGYE1sMDwXujmFra7iomrAkbxRXo52TqxzKXCMqe7DABd3WiJMjiwSf4jCuinwfdvySGfEHtsYVCahVWtPdM",
  "key10": "3wwYPm4EG1fSZbfNxcuCMkTC1Hf8XEY6AaNcq9srmesck5PmAoviA9bkxk21bk9SCoHFAK6qmw2LrzrApEvZ1FPJ",
  "key11": "3Jdc2swEoAXccUUHoMBz9rQuDX7aigFLe5WqzqhdABAQoL8NqPYLwNAbvmxgm4yHjBe6xUEUjFRTvsgipT6DqPcn",
  "key12": "fQAZrXU27fx9PTgUb1voKoSJX923nhVwfJWYLnJHBzYEYTjTwMnMAyVnQQXkimUWzhR7miJA1HkVgAU5rwhJ6Ya",
  "key13": "AVzuyRD3kmzDMQyH5bdDKtZdbcFcLgTfTQdczTuNwHKYt4ma5VV1eGprbLLto36gJwhNoPhCLY9tMWdECqT2J8E",
  "key14": "GZFFnpCaviGHgHDkh87YzX8SobDPQeVKYiLjTGrR5sUyvS8USaX4JAZcZyQRtV25jW1osWwsE8savFLR1yKnGBe",
  "key15": "2hPxAAkna1yV4Q4XLMxYCHWkF8Vkw3PtmaPWtKCMigpDARm26QrjuT59eQG6ACypsDD71hDnAKwaLo1P7WAJ9tcP",
  "key16": "wHsT8Gurrrht3p8MHKfrEJfFALetWvpm2mWsMDjxz7E2wPw2FCYTSu2shjLtYk48nJBnDLSNE4dsySdBePD968y",
  "key17": "5MdGcRyEPczqMotZF7RWnwYR6fhWKbyHcTjg9ptRtaFLQmssw2C4gSaTC1NuPaSnVKqTBVRSPTonWVcs45PTZUnk",
  "key18": "RAN7upZu6KQ6xSkbKaFSsw86T3c5AgY832THVa4qfnhDaEW675KRq7EqaWhX7tZboDvAKsS7rWCzs7v8RREPnQU",
  "key19": "4sSSUiVuF8yyzVArWHAXEd4dX6ZqCNwvX5JQuGeg9X8aT2p69pDwyEBR9K5Sq8vkhuaYBUrdvGmE5gSwLPm3naZi",
  "key20": "3QnTct54iEVVgqT746kvYEkisSyo2NhVYv9kkCk4rwo5dZTsfjSZVN64Tz8h2sgewQF3CPmtFXWuwrffr2jYUrnR",
  "key21": "2bGDBiQa313psnM56ySnnf6yVMSgbYVkRZBgpZpamoz661GoDfahWQBermrxMPGZrHV2Ze3FiHNTeMn37CeQWVsu",
  "key22": "3YpATARgspovUfxdDZfMmFAzDP1WoKhL22Mu9GvbHuiM47Q4C1ogAgAt84G2R9hpfn7tgEQV1n7ndRXPK9MoSQoC",
  "key23": "276NvodYEWVyPNnh5ZUG42iJhUrXNmipGi8cVWK4fxL5CajmH5VWjQMdd36YvQMVscEtaDPW8Ppz5zSqTvncNdc9",
  "key24": "2MtL8d7pcvywkzY59xrKMAtpTS76PfmciUAr69pkFKiNhGTNTRnmsdnPXtsnbXuYqGUfEgmpju33U2HqhvN4634f",
  "key25": "3xPt98SCQJzJnBgiNHWEA1iEdxG8fwHapmXkkQcck1dSSTwX1srv7f3H63tHJB2wJpSk15GVZgsm49v9jgsK2Rgq",
  "key26": "4WgkZyx5CPRqmoRBPBPKV7RvKm7RspDcWbKxBGNmTdydUhvLRzNt9J8rmS9uapSjV1aR5NgG81uS6y3JzcvuHvte",
  "key27": "y5AWfngN5eifteD56QqJp1Z1op7QippmE27YSCxVNn4Wfp89tXUti4A5viSXBz6SjuSvmtU46rMFWySZgAAu7pY",
  "key28": "23rCARVAFDeHLan4QwEtNrxeaAjYrpER8ViHUm1rZfj2WfruNCu2eH6uL71YasSTppKd1grK7iBivZxnJKtsq6RQ",
  "key29": "3vTc2Fbvs58ZHnRfU5hra7SAR2SE2EtVhvXMr5un13zKbcYdEUWoi4AaqfWx6rC4CfzNfhPwSLuavJDzASupELFL",
  "key30": "5yR61jSQECTx1r2qVbdcg2njD9FxHWLFXysd9L9PhYnMZtgndyoDEgNPCzV2mFnNucbvHKNfbAFgMiy9yg8wZyDm",
  "key31": "3TcCfh2sCFRE3r252bJPgw9TXpYX4Nxps3MsSLw1rT49KZdQtaVhZCKoV7875c68Y3RNiY1qXPJMtyqP5wquPbo9",
  "key32": "2NKDAF24kD6Xx9uCr3P1j9eTH1Ntp7VfS7hCLmHEicdTt7jMaoHuCn1jadgq4b75uP1J95iZepnKVn4J8WQr15z5",
  "key33": "3fVMNyRWW7TKDE8bKRTpXHnH84quzshPV17K4QZJu4CUZYBayKpKtcefEKCYi4ojrzAiWG9JxJhaRfUuYUJxfWfc",
  "key34": "457VsrC2ffNepAhPjesKaYFWeL3wLHk1sKrYFoZHm7vbaj1wE7YPHWuHyWbr69D67q2i1GpKd5qqPzsYnXV3SpWB",
  "key35": "KabnKGy5fVRPWQ2nYS7eRAFfvieh4o2e4gNDH4ci31324qFXJz3AsEoyvQjUrwGD572Phmvj3S76GyjPfq8snbb",
  "key36": "3Jd6b3wB265hpsnvnWiifHu5gys37fEWDDTgGW9cyckAmVVFn1oTHsfXdsxxrvdy9cPsD246nGxfhUAA9783Rfhg",
  "key37": "312NHvbw8Vqc84YFA8Su8nZif4YdJ5atdNN55EvTAkFbkinaJhTMzY26hnfKa9xSf4KNu7JyJwapYd4SzGUtNM19",
  "key38": "53MT71oupLGTv6vBpTH6cTr1khzbWxb1rPh3xWkFFGA2PjK5BSmQTnu1d5QWkBNn2GQqm6WGA5aA8NLdGnYjNQHg",
  "key39": "66LgWu1gTJken3tUX5KGcG9a3QL6vH7bLehpcGd8x3nx7dUHv2x3LnLk9U63MeoCALn3opCdQXCQYDEEZzaQxZ7V",
  "key40": "3gtzyoGwjTqcq6dDm5pBT6AQNSm3Lget6JiBHTk3A5cNQ6Kj8Ccf94e9N53sEP6ceKDHG32HTUSZeR7TsCxv1Cw4",
  "key41": "4AAS37jzrkfAVEP3JuE6X9rpJ6HobWQE5GdFbsRLAuJnSfQchu44abwhtcqDjXGMsTrSxX7KYXTYRd5wzZjMqrEt",
  "key42": "4A9LJAAnNb7TJJnT3PQHvTi5oum6WTxBshPyb5Y5BnPFT6w29mZEVgrfd3EPj3F87yz5G8gFfiQHNqKrSSbbGMX8"
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
