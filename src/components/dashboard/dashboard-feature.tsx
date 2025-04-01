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
    "3tUS1KnArFieNTJ93tPiV78YgVikybnWeAHUK5h5ncZ1c3fsV54AEmFSrFPKjDifkJNUpqP1cL4ybMyqW7Zr5BAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AR7AehWAjDeStpi7usTXV7RBhSbSQ4H5VBEfss5Z8B1p349bgJDswmsn2Uz6SaHKv7zSQSTHj2jyHi5Awabh1xx",
  "key1": "44o6SPGU4G2UQTrQnGWZqxNRi2SGsSciJY7FVU4XG5hHreLF16S6LrbMoJuc7x6YspxS8fvqgnNqzJPoGW6T6nFJ",
  "key2": "4vsXoxmfSpVs2wty4sGDoC6DGoAuGKsPG6eou1urZdP1n2noHKC3pVUm4Q33J3VzgUptiW2HcyVQA9edFBiuBaxp",
  "key3": "5QKeexn9DBbNcD3JNFu2tSQD9rPNcovaytGn1turiBQDgqjF314fa1WZgv9kiPiEyVA3p2aTUGGuvn5Ma6qL98dH",
  "key4": "5ciEXrZCpxQRpsoEvcihJrLq4BftytRzjazeGLSTWzT5EEE1zt4uJWJLGPFD3mz1o1wxdKf1Kzt3ypBZf56TskUY",
  "key5": "2mUeSFwTzAgcGuqUAYc8ztXKuqbVdpShg6rpiRG6BwiaKa3KWLGRea6eHTiXwTNkrwycB8VKu34F8ZiXM4y6YvBY",
  "key6": "2zbYFB2XxQ8U57N3PuHxKuBQpuxS4oXQ6ur3W3u3J7JKaWLf1FWNe1LrsdT6iW7BGfwzZU8EUyHDMhDMkHcjEfCa",
  "key7": "5cd4B4ZquoHEBgDzqakmsTm4VsrgvVidnuKt7Y8bhEAJ4MWK3y2cZdQ9RiN79tGmZiRAjKELCxcmhirC5A7hk7L2",
  "key8": "F5ErmGMGAMFcC1RvT83X9DXqWhoFvnQmeuwboYRZyFKhAtPBFF4MQrawXEZgANfw7sM2zceNHR7RtJPTi3tzLTm",
  "key9": "2GDhsHeRJ2D6sb8Q6KHvaeUgz4f1mn5sp9jX4rVDhTaF9c8L37Raq7TUAeMWz65eQZ9Ay4ibCnbX9i52RxFxKThj",
  "key10": "429nvryb6MUHC8f51QB4VomDcpGdNQx5GCj4NLWTgG72hG2Mkx6CgeLFRKuorxkBc8V5bjp3WFkcZjW8wq7zy3zq",
  "key11": "F6hUcXz1uADFXKmbumYTh6uxBmsq1Rp2ANfp4GktpWE4ujfoBC73tvaPEYwDHDmZv4PdrDyNWumuCMmbSazv7TM",
  "key12": "GRqJFmsG4XMXP6TLxQVUU9Z5oR7CWDDWMRQErRN5AxRkb1YKpaxHrPhrfEgU5XdantR9jJFFGFvEfawmTiRum74",
  "key13": "QGBzMDErBs2kgdX47DLLdoCpYhoUeA78X1J8FGM2NkhTaVd3U6TRXyGLHdvtyhy7msELperCKHwTafwhij1R7hs",
  "key14": "4Kn3XS2T6A7KUq6XNt6b2PsjU4KoPy1fATKuYQC3wfu11ah9rUnXTP96GD7Bim3tc3WeDvHqKwDcVDm5QxuStdU5",
  "key15": "3CuZTC982jkdiPW1gtafYPQyuqER141mTVZHjmm95LknK39khLagUJtDJXQ6hx1nLGMjs7CfyXZwE5R7qtxY4uiW",
  "key16": "2v6Z6pGcKQEGresVfm7YnCJknxj7HLCnyg56H5FwhjPrxTj5mFfJ2kadyDPpkRvjZVEDV99yPHquX4NGwtLfDyUo",
  "key17": "4283vHFE3tpZDc6PPnPi1bLkjdvqtZNC5n47kq7bgnbm1sfebMEbA5gnDqbsKDFvoRK464LvzDZMQ8vp3QY4uzZ1",
  "key18": "vnAQRYAo4CuKPHtZwyc6LfEBV4dyncxpprFygCNh4Pnhb5xDCaearWgQq2YzXcjqrpTzFuLQvHZV4CSiYXGp78a",
  "key19": "2cVY1ZCQ6z32h7bjG3HGPTpvyprHTwAwgfFfGyfxCR5xCEF9EvjAGYmgDjz7pcM4qWJZMbucVyjhkd737AXFcztu",
  "key20": "2RnkdS1aRd2VCTYV3wWwTGkd6G5UdgYawfXNZFFM3pHnDgw3HcwoJHVZgnH33GKPEZAcnbeR8Y9M1RAHDzKb2dd6",
  "key21": "4T2vdCgzQxfLoWAhev1K4Ek48vXT9h5ueNhDSPbR4AU4f5EHAjLUEaM9228n5hW4dMQDtEkQZUtXdvnsGwP9wDyR",
  "key22": "bv3pfthzWc6hiwFt8weDh5vRqxPbb5Cn5Ufs16nGUDSJAcQCNq9SMA3Wzt7eUHuizDpFuKQeKRcFJh6bR3u66W3",
  "key23": "MqDAFYhBWCgAEPsw1BijBNF6VeHu381jhCgU13pF1bszZmC5BMWVmWoPMZ3hxaVhB18PwPRyynwVGFzNE8nM3xr",
  "key24": "Ro7deBEiTyZyhHuWy2QavbwSgjZv9ZQtnALJ8kdt7znuVKQixHG6Xbbc56BVwNfrutVDCMZeEhfWvbwfUax1AXx",
  "key25": "uk1n2XXGAHuq6SLuL1charSD3hVHQcGwRKXytZRdpaNAwSibnb6c9HtAxLaYdnmhZCdrvsSgDymW3ZtW4JJDynR",
  "key26": "8wbKbz9KVZwBtZr7gvZTV2PNS6kDenhBkqrXx22DE6Ec3rLuFdhmscf3giyp7MsdEfAvGcYpXdHcr576wg3jK5L",
  "key27": "3ZbhS35zaHzpkMY1gVJ3SpcaHeJzdeBiRfXYuGovXJwg4HBUymQqxPhzErVXxb4vXA8nLrYCaReaNRRjUBKoTVXh",
  "key28": "4q6wGJoRMNoZ1mFdLUqw6FWnAwmAZaKzkdz1hcne711v5BT1XCvHhbz7iB2Lp8Gdr4T8dCP7soEPQYKxiiX1rj5X",
  "key29": "RY8esFxdnkTAXtjh5coZ1DgpZFx2L96yyiiqvUrdSiEV3h4Q6pTnmNN82GCKRGqfSaCZEteiYuQKEazsW4xZqx2",
  "key30": "5rqkBcyMsYWd5TvSRBrRWNmkRNbMqmzEoT2jXtvswkpN2aznzE29AsBAWiVQg4FmJ6kacKqfLtg464ZzQoUb5QQr",
  "key31": "pPF7phXfZ7y7QioKRdLW5zsdEN7EoHX5QiEBhHcwNyvqW3MKGwNu5wKZSMsSSRmzXntyrRJoE2CgrGeuFaq4ABa",
  "key32": "5hfVve65AEqzxXfWW117xoBfc9d55C6YvFgw4V2SQH3cJBhmyDGiudAGR6wYgEufBsTfJh5bAxD3yyqjHKPNWkFL",
  "key33": "5rvREdiy1hND2FzvgwXfF8KdfeNXVKzotsBsQYvKooMdSznbGpdzh8uBencrTX7V9wG9EVt2qvCRnCosW6NJuZaA",
  "key34": "23GG63mQp4y7BkUJJFL9A7NqU9y4J6KKFbGdzX1syN5xEm5wqABKP2Q86Qe2b1ztYDv4sY9fN1UPsMPA6cAc2zDN",
  "key35": "2DqmpVKD6dh7rJxmMaMfTKtVR6pYZVLJHpqVnNDhhiSA1UTiTRg15V7pbvN1EsjBHKHFRkJr2vxZRjBttCcToD1T",
  "key36": "57K88uwdoxyj94L9QM1BrzAwZYD6rgGRoNFZhht9mHtcTEjCuaMHCpTYd3MREDbY4owkzTgHnBa2jhN3o8WTkCaR",
  "key37": "3mvynYX8fPSBY1L7TDGTXJuqsz2aGQ41FsCUD1Tmtcv3f3UbtSopMfbMsqWEWdMKpoPdcNzG3iijS6TXiDXy2a7H",
  "key38": "4sb317itebAybm7gNbyVFFeDZ3SdwPVG5yXekcZVmGY2GoUofiAJztxAuRKs8JjQQUYCJputUwEuSrj7SM5TuEkx",
  "key39": "2KMowuM63QfMMXgLsyYXPKPxtDmCnkfqvqZchZdPpDGz4bXYW9yMRqcHUAbsBATMmQHeFQ5pgzeUUFmZHvn62roP",
  "key40": "2rhTvumy6hoFCy54Dt4zs1srhA86tsuuMdtQtZ11U6mvXAkY6brYBJ8rYJknrfdWSJUof2Tzic7ukYpJTNgayg5B",
  "key41": "5cVUvTBzFccBuLgwVZsLdUSxB1F8ndtv5mqa2vBx8S2EQXjegFBb9abTUrsfaf1JPRamu797UruJ66S8zNXwVXix",
  "key42": "7C7h2pM5fxvDExook35EyQZPWTpPLBkDFcvNpvq8kR43EMjwYY9sSizstF2BSWHsVPKF2xtNFvziRDDMxdGVcjV",
  "key43": "5akfqPgXvotcjkoeogEiGMqeLwFrqxuDB2ove7MJAXs3t7q761vtkCcACUeU7t7dKD9AZxPn1Ct3qwNLL81ikQqF",
  "key44": "5Hxe2fRSAtny6GB8VdDdPLdm1WjwMRwuiPwGeksPSc1hmDGekdnw2VVM14A9d8YZZzVxvJ3831BXwEQksh4QafEi",
  "key45": "5paNaethPASBnSDbxjpVH4qNCWhMLWQmMc4CadFmBjhj9aHuVMBiGjPeDVsePrV27dSdbBdVrgfHqNV3gX9mq6ph"
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
