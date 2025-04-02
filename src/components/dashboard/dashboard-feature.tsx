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
    "64NW5yKUhYXkycEa4TR1bbQhd5t3EEQzX8pgfguTi22VLMDmxrMvSztHJWdsGA5Mm5hFzFYY99qoJp8vpjAR1Vf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cyKRmpQqYuZ86ZQi3JuaHJaMuxPZeiVVfjpFvTsQdNt2ewyAtFFuxrp1XfqRpcUiVgtBvGgPXeErNovRNYPVic9",
  "key1": "YErDb2UGMnPbNhALvhPv3kSHSe7r1U9BVgJSi4y9iqYoUCWV1ngPZfZB7pouZfkfyEEnzWLwfxWzkXjxmRbaF7D",
  "key2": "5uBe24j35ZiMVDe8WvF41CBUaA9DwMRiL2UZ2vHcReeHmDK5evJLaZA3bwXap1Nr8e2WUwNkCPwXht67JALaLrME",
  "key3": "3JyGZ8J9KFdwae5wwYKgCZRQcCFZrtaK7u5EudcvKr1gZp6wSCViFVbDC9rjNakHXxmG9CzFYQo56YjjprCAM4nF",
  "key4": "5kZqF5dk4smSYHBv3yz6dpq3aRfW4XRGpVdLZC2S5rzLaSsKEvxeMhS98Z4rniiJ8FvFiZwtqnCZBANjXdgD634U",
  "key5": "2NryQG2PNLZu2dhKqwTTfuwb9iUrBwLKfzKuXw1LTL4dAW1LBSWRLy2SY1EKCWi1spoQdw1sd7YGMGc9nXCHAz4j",
  "key6": "4YgkmhhnxmGSy3NoQZKcDWk26j4jeaxTrSZA1BP796BfDsnLis32E5DmfHuQXnGhQRXXk2kkVXRtaXo94sK6rUi1",
  "key7": "2tRSWEtQQ3o6deS1aZZVBx6VR2xA4A4VobqRHM4iJt3AiHwvjZTsAdz3Uj3x2VYzf9R98MQiK1n9ReBP44kG2WF2",
  "key8": "4sVnaf126fuDrD3JpVDCREkgnprxAWRxP4JTRGL94HWVtyDa3X9VmMjaBbbPUJjYPfhoWD6hfSnyibsDB6rpRZkf",
  "key9": "5sF2PcjdKEU2ppoNMuJvHDtjMdbpuUC3XY25BbsHDMHhTou3D6y7tpRUdpuPMuJPfntg8jpVPf3iQhCsj8uqJcUR",
  "key10": "5tnZ4nwCuX16815DPYvepoiTgnLzVPp2BuvEVmoWPScTRKKcL5SR7KSMgjo66D1UoAibf19LE9KXCvU7uXrfMLWT",
  "key11": "4DR9VwnqWYGSaLXFdba9ZELC9HUvvk1AdPsToJ97rNBGcMhdfcpPDFrUE3gkNgz1A66NJE5CjbstzsZwxT7vuvh6",
  "key12": "4TAL3mpFfcEztzAYRR56SgvD7U2Eyqbxf9SYohnAmn8s2HfA47ySWFuXU2y8o5azUXAiZw8UJCrLjurLKbAC8GwX",
  "key13": "5FB6bjbrhDgyZcV3qAjBMaLeFnQXXamWacxRQNc8tu4GkmBxkztmbpx2VieHy77ZZcnVdTK7CaAWbsfEMNAGiNP2",
  "key14": "26PSiw7Rbhnwa5W6F7JLermPyYpRBNEi7kix3qEyKRP4TrocE8NcSFUimpd9miroXujNpuixwYzFYkZLQMnZTEyw",
  "key15": "4MRGU6HHStrqoMRzr15aardcgd8yWRos15wKLuTbjSnfyFhDVQ9TL6hT8e3KDCybei7tgzDSAFA8823SPE3ioS7a",
  "key16": "3pC2aafY6119UDy3CyNmxK1oLmfcXiYeMEtzqNNNvsTg39CBjp62wBW7o3rHRFXGojRShxHHf9BFVbJ5cRJXhiBb",
  "key17": "5T7mXnn4L6F8Kvv2454pEMFHuHR1waXTMLARVwxCMn7J451iSMrNvb4FMz22jkzpDFtmic8m3Hfry8BoTKuD5iCf",
  "key18": "5DbLAZkNE54QeLLkUjwSXMMyeXGFwPSc3k8EUQWRnNtFbdxPPgyMDcJUdDgVf9W5CmgZVJd4y2BymEwqngbvQYBW",
  "key19": "5UJ8uuv7VJsS1g9A3aJiXWegB3gNaRHAbWn5pZZirWrGdXrbwCfip8acGKEkZzQ8Fq6rMYUPdVM18eLGSNHzvTKA",
  "key20": "3RfGPpvei4gx6ssz256HwQrWSLyXTyan6Mu8Arj4qd5NJeBWHe2xBDg5DxqHdqenV9RyB5BKPjghwxgf22zTQ8Fb",
  "key21": "46aG4zM8JZreQSoZhEC5xWdz58q4wbs2Kaun27ZWz5YA3BrHpZUNz6VEtRXjPuNZUrvLQspcU4abixtwxSYZ1gA",
  "key22": "45RDd73aZXtbW6884YsCQ1kauXQ41C4NwBS36wCjiFNENAKmaVWtF2uPdk3gKPKiZbJNQXxxDCDJAVaX6aNSZocr",
  "key23": "5BvbRdiPuo7ZoxzxxT6wJZmPj5nWnhzqnVuNaSYFdsS623ZkALw8VxvSUKLaqKPcpFYQAxBjHjnfZUznEjbKpzf4",
  "key24": "5iCndcQgrg9PbZy24CrnDD2ZNW3A8ufYhKoS7mH4gi63oHABToxoyNxmh24ghZCpZajLtbPqctCWpQq9Wtuo8AJg",
  "key25": "4JiyeHBn977zuFHvZ555bnMCuncAqoBjaZGCkkjtniKkrTsX4dTZTbFQiE1VX1dkwcxX1bGnBSPDMSBjDHtAj5qv",
  "key26": "pPpTyz2fZ8Pk3Rz9QeE33kz5n57pv9BDe3SSQXc6HK2r8Q5LyiMpimiNSxJ7K2kdvnGFmiw9ZvZYWFfd2gEDLh7",
  "key27": "4AxVNEEV4rmo5VGaYt5K9mgriqVNU2NjE6AicDoiMVKN5h7qLY8Kx2TubFjTDoZt8H2iBXZtw1owD8Cw34iigMxx",
  "key28": "2jfLaN5ESQgqnLumRSi82DH8AuQVASNYKiLSDTUWCEemPQWtQWDN9zR9Dr5LHimq1mJyuMkXjaY2ZJkyW89ex7Cz",
  "key29": "2T992vgWTMjgG8Ty97cxyLQXxfwPqQBZt5iCYfaw2CWYAxTEv2Zw2XNY5nrVXxZC2nwCXL95AErEqvf1H4npYaPo",
  "key30": "5ngs9YUXhMEPKFJbSsbWeiYQSg6tqVVcUf8h3fwZDjaWsUKR7esSUq4YfajpcC5ppTLXReCNqKiKsKnQGiJb1tAM",
  "key31": "3RtdMv2cUGYw3nWvdBBXx2pdQCXULXU52gHLTCHffiqFRBUzMX43GUH5UyTrzDAmk91m67vJ12pcpZRtKMWfnoMZ",
  "key32": "33MnhWPNhEVzK9wg5Vwu3Qji3oHknG9p3aUQs37d8twL964zdfXUowrXYXAfUCBFLf9v8LanhtcGnF7oau8KFsWa",
  "key33": "5z5ka4XJ9J6htj8fz8otnSXKphdTjJyETKLpjx6jahsqbmT8fieBJd9qCRNgQkv1QJbsBKGDs2e3g341GJfGoyvq",
  "key34": "38wfMebKb7mg9TjaYxGswmRRe38z4dM7rGFsFPPVdw6XHeYE24WGvJisboEeNobTMCjf97xQsrzUz1KQ2X6hfAjq",
  "key35": "Fe6aQTrMKBUWfX93naanCHS3zK2oXCZbJvbVwsd6fuRkTF8nSnVNXW7E6SP91QiYsPWLt2vXDxSvz1yPQ1R1ctS",
  "key36": "3erk1qvesr7qkKNK7j7Ljoz7oQrW2wTbHG4qzguoJyxot6yz25TKd1NzCw7FrY3GM43AKuEGhiwZXHMrY8iRUmRQ"
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
