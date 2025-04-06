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
    "21E26jS4y7d6t4a3ssLoJo3rAJZNEuYE3rNu8VGqHY2MLG46q6E3Cu6RxrSVUHYXxL8rYW2LteGtzxQiz6UxaY76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SwuVEsUQu9q1WkvFJZGr184sCL9gTeo5rgXdGEQn2qxn3ZnMX6ErrvUUP2frq7Xsp5Q4ikkyhuX8XqXVcEFL24H",
  "key1": "TzvtPBuPVW4tCxK5Z7N2ysNWDvxu48iSL5ZZTs7VPTsc8qiQP7eBRLbKENoM8Xx7mpfzQVJEotkgyUnTfDjvWzQ",
  "key2": "67QZVUf3u1J1wTgw2EvrSap6AVy2fcA81bQgUVRZ2NsetTBd6xRx95V7bzEgp1m5Nuj4ggyRBHuqNXc3Aw5RfMis",
  "key3": "5C6auFkZFfVxA5La9YnCkd8o3G21bhDabwVaatpDXERoPAeVGB74vvaYWZBe4rKTy4PfBkG9XCFCXZBcPpxXvLTy",
  "key4": "5sUxxRQr8VGHNmJ2vfQwNbqeA5cLfqQ99CvqtXCrq87H8PtgrsAU4HqRbshoJua69aiuLMhcaRWbuPimPwGe8YFy",
  "key5": "tK31b2nLSDzZDRAeFjrPViETXZv7TDne77NbsUawgYzXAhH9Ldo3GaRxSMWuPwbRDkAUL7WfHE7WL11EPXbpDQq",
  "key6": "WS3NZfEkv8qzEfRQChEJELmWSQSBuPjPybt2XAraK6Eqo3hsuXvbTWtHa8fhYqi1dEwZukL2YcM9KKEhw86bhKc",
  "key7": "2yM7k8j72kQRq5KLer8axYAfhVtzohsxY4Fipufjvkii4puxedfhrfq4Jd5Hay2D15MXNpfL5ky2PUW2uMhCtmAH",
  "key8": "ykSdt4hvZ4ufVBT9Tc9zfHVH2sPScBK7EanzNuMSW2yukeedXuEXA312YiufYrnELmJB6E8fw4cCa62JnjoAPon",
  "key9": "wTqmNKwbi2CR6RFxPsMpsVJSyP1PFJ7xG8jeWwu2j3CVn659jQ3zsbmEZajmHS5MmEfdVL98dBtkNWtMS3QsNUY",
  "key10": "4J1Vjyc5NCyLGiiC26Br9aV1iJuHZD5gfaDM6y6Xz1xd5FuHDuT62Dn1Nqhz53ExFtBq6GntDAv8JKGaTFKthaVa",
  "key11": "2d7gTF2CwUCemeEbTwWjfd2p25VcmDjF6sbsJS6vmgfjMvAgruL4mcxcofx3m9nP5jWfU29EZiK9L8BJ24BsnLEZ",
  "key12": "2QuyGdmQt422bxqVvXia5njHnTwgtMZKxwtLcTLCt5QxpHvBQxXfu7yiryHauNx2VVM4ZrFJuWuHJ3eK8TL2C25m",
  "key13": "B1chjZjDY1ahSYmi7Bf9AgRVcNZWs9ySBdToQB9jskiFWDtrkrfFeS6iXukTtv7UT4eU86mPadmmTUKhBBuK6un",
  "key14": "5FZdwf4NbEY9r4rGGzkWjL3S67xX7jKK7y5s9Nnh9Z8mpsUXpWYqCyrJT5nqgUKcEdVHdDFT3w2hi3ua41dcaKtK",
  "key15": "2mfuYe4hJJJXppFCYjVSS8vanskNPvENrgw4KygmQAC5VBiy7he8j6STeCGV2B5fn6v4ra1gTuBGevJ4eNhWFezG",
  "key16": "5KvE4SFevxxNF4upN1FCrDnHUQ97VUFib61ng5EosMzdqJVseqGHATjYqM4CWm9SYhjwxt5uis9eskHi5JjAiHEf",
  "key17": "2re8wBcgaRRE9b288wMjpuroGCw5U88kXDaE2PAJBYFW7F88uHhcxgic2z7DAu2U6DkZjBZzDZtQbTGbbKmfEB9m",
  "key18": "5ttoXzgBbMuCyYdACx9xbvbPnP9jRrJkTcXA1UcKRrAj5ZdrcKdqHAWKdpmgKrp5KaAfg2xmds4r4i1KAaWqLdG2",
  "key19": "kLanungtMDGadB8BGrC2JE9bX1VBSJFASZxbagE4o3ULgHrThvMprm7kk1f5dDP1NcNs2jGNYikKaCyk7cZQatg",
  "key20": "3YSATZw3ZZfrF6NCPjURpsQhmRSJhhe7YJba3m2WrUkuwQEkDktvZoPZbBvvDQwVZx5hgNSZ5892rxuqzM5GqrdE",
  "key21": "4c4Jj6QLShr8y3sSusxX65XapUjLQULECbYG5aedghuiSMQ8Q6zmTdoWW1TZeLXFaexgUFoajtheHJvDXsAjZerL",
  "key22": "57wyqe5QVZ9NC6wTZQfTmaMxaruBv4qZfmMb8jmW12VeKq4VJeRMk45zdqHnjBYuwTy4jM89boQpTCAUoojrsTP5",
  "key23": "5egn3NhdgqiaQYVgDxS92UbbMcdkHUe8ybLxivmVRmN1y6BRDEEaWh72uNwpjqaQpoH9PQfNgVb7FXAnxr7ChCYN",
  "key24": "XQoeQUUTogZwPAbN481nLAqZiCJntFeAxc4B7Spxc7CrmJbutTjcQ66qjhcXiba1AqasMSxzR9fzH51uvJAxM7V",
  "key25": "2LqRmuiaJ7rW8r6jaDz4gVTLWngbyb1Ck4vCcmyXEZi5zevQQyrEjQAuuQCDQySJQmvyMynS6AYYoxy7y175n7Zr",
  "key26": "2d6enHKDvWRYisEvxG1wPn8owB8DCgZsDQWhs587Y6rGiHKiCc3etXyFM59dk674N81gpPex8bABfv54YLMfJXth",
  "key27": "5C6AUTgyJDQVqTJGe6rEpxyXULivNJ36NLTLCKG8VUMMxoprAn2C1dyPbPPT4AqpJDMqZ5tsheRjyeKyduB99eeA",
  "key28": "37p2n5K2pzbd4QbaCohanyNAyi5Zp4xkTL7hthWpnBkhptUc4AWudKk5tVJcyDS5SS18zKRYTQfkF1ZCXFDNpWUE",
  "key29": "2NKiyb3LVmQ6zPcWpArAjw7METV4pX4mHF2LkML2m4ea3wKr7GPAozT7Ebm7R7oUvsTzQXe6Zrnuq1HkeBXCThmo",
  "key30": "5qvBwsxSC7cibs4kSxiGWC9RBZeeHMtZyuNQotuYkcSsenQnzk5TLgLSPsT3iGQRiGSfhCZSts4Q2HqtaXezUfzT",
  "key31": "5VYjFQTr1PRmfzXfrax8X91ZKW43MtAwSmBMCx5G4LcyJQJDfwPQy6sZgJXD67NWeqBoon1qKuRg66ihBPpLtmx3",
  "key32": "xff69SLPERgMHLSqpeUeAssussEyXbdgFTC3n2icSWmM9FtBn2zZFetdwew5ua73PMVba7fGuVMs9VKtqWdPCbZ",
  "key33": "XhP5dDUCUGd4uxKbCPgTWEqkdNCEdTptVkguV3oWaSzb6Gcjn4vYpnPjSTg1dExbbvKWeqJhPnJhLEgF94BmCqo",
  "key34": "55NidqeCJaU6NNkaiL73GeKcZoAkp8cjH4hH2PUyAGw3RsibDEDHYoBdcN2c9y16WbTKUgGpU2zYYcdxb1Jix4y5",
  "key35": "LAKhDJCpbB5JLezUUBeN5UigUFZqsAM1hdhc9UyS6ohUzYC2WfjASFesKgokGRz1FqqTqdrvs9L7VPs7BGndu1q",
  "key36": "yzX9S5htJpXEgrgBaCVvMPWnhkjEYEXYQZKcHPA3scddz1Q3WvDYKRFe36v313kJLUv1HQEg6p8eTf85Wikp8Sa",
  "key37": "3tRu95SChNa5f4HLf2XXniD8LD4xy9qro6UPGHo81AZKRwJ9mganT41kR87XfwH1TKTLksH9zA7RJv1KfF6QAHwW",
  "key38": "3zfJ2LsLtv1DGH1UgZ9aYU3Xf9CtMZkqR7m2xcBJpV27r2jX7Swoo42VsABUACqvj3mecYwQA6NAHJnLgD3uaGYo",
  "key39": "5nTK9tyxPMaG8oFkCEfBUoH7eq8D7JPf924jdi5WGi3XKLwvnDc2XsRrYxKweDgTCYasbPrYe3vVq2W8DfuX6b8F",
  "key40": "4LFJykmtqHrjBNmUkQem3BPkSiczhMRrXfJyDGE4W7mZ72QXYtLsg7EFiYep2fA1xt2Bp9XbZBCAioUZntkAcvJv",
  "key41": "3DL1E6UVi9nHbPSD9pmucubPvxwTQXLd5zujoE587xJTNVGog53SCBVcQjb9RUKUfZ5NifpQcmNbz3wPmU75h8PC",
  "key42": "4oNZPV1M32QvU9RAqNsJBgZe6LEqKKeM4hTCLVAK1TmkQp7tXgTSqzC3gWRPMUtL7Mo5nq1LnSnW182nQKhtqbbd",
  "key43": "TeUYwKctvEYYTBu9Kkmqioj3Q1nH5BMGzz8mGNbUz45Qa3EiJbPeELD9v2PqJ1jY4vYCk6nmVT2vKcakFRxhRKh",
  "key44": "66yivrtmvHUTZGDBbscZnWpXeZCh9iqPmC9ZvAmqDEHamQN2dLsQFfecKTR3eBabUHixvawr9j57AsKsm4g7Ni5Q"
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
