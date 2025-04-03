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
    "42pqi8midmHC8V9mkAhQrbw5qJH7bM3bzW1GvyXLzrvN8363beVT1VW41wpMSnW6y74h69pUf5qip3RM3RtFrt4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63MYPXtQYzWttbHXEKp7t3XzU16uLVAyH2CJupM3dZ3wyvzwTZPCDiyDMfjV8enHNkBt9xYUwHSBv3ihGuXMvtza",
  "key1": "4612sBDS5Kna2WZtYZFPpAvfgPdskoAzKsdP7XhcekUhL3xsnLJg9E8Gz8U3t5gBYn4siKgcN6WeV49sGxC85ENs",
  "key2": "2XBwydAYWGUga33SGxKwHqbq9k6ATwky9fAwHcdcKpC8EY2PaXyd7yRjegt6vn18m9qDnQTtfJst1ZvYT4P92BML",
  "key3": "cSh5WLrvYCVW632LEwQ4bEWSYdHmvbQcvHZb6Ey1y3mjEb8fdKadye8Pi1R9VTPp5oUWv147iY1V2huovK4p7Lj",
  "key4": "4iFnDwYgLyARMJYyhpj6UJX7XE2xTCmeoZ4uwZF73Wg8fhJFivhqqeJPeyZCjpeYdpydqwGwPt7gkJiKG8YBe3sm",
  "key5": "534iBTPzWpoE1WExgpeZM6uh6akpw7HoNDYoX7VK4Bt6g7HwjCPe3LkT7RaiFtnsyRYoisdQPPF3g1TN8FM3xuNu",
  "key6": "3wAK65sqDXf8Q2QGC8E22FDrgwuBAqrK4KL4LLFbtHc2F4tz19ucbWCrY6pyh84x2UPWBWgrAjyZAcVbDizm9x7V",
  "key7": "4yp4PoBzuMdhDUWt2bEXahkgtKw6p1RM7FPAesqksaHbcvJtBQHEz7EEYQm1nv6JUu6yAU5Vs3Rgrh3MS5oPKqVk",
  "key8": "2y5HeDLPuj7zN8x2JNwSevoA8JdQHwDPkDwCng44LkjtYjq83mUjy3DK7tAbb1vb6aRatDy5dgUhKfN5sHDbKzxQ",
  "key9": "5kX5Aji1MoSudNeNKBMK1PYAKxusYML8vSoGUP2wHhR8rgieci8rcLGVfB9LXvYwGXK3Niv4FQaSKUwAbyU4v6ch",
  "key10": "349YMSHsMdh6RGSuzY2bqSRfn7bdVa2DXa4HScnsMif5sX8ZgxoCMVqGKLTkJM5GocvXPLEf88zTgZwhSydKKwa8",
  "key11": "2dTMDZ1wKnuo24xWt9GqXKS5je9fsB3HSBpMfZrKMrAr7FRv4GWREHVf44EMzjCaTj8ztDjRDmfFgCaLe92HbM4F",
  "key12": "5pR5HRbMhbCs6sy38CTLCHzeNA9UXHWBfVWSnUSCB2xh6g2peQ7tKfY1A6tsxHRh6kmUg3iWHWxKGt3gZnrfSvH7",
  "key13": "sa99TdmqtXdetWHw8gZqVb72y58tdq7Rygko7GCcQ98SyES8bjfWGcCAghCwJns8dEdSEmqK5YngUAMF951oaHN",
  "key14": "36sowMNZsQpbzKXadC9uB2PFkRM5M8CQHe9ukJBaaE8ASGzFrK5QUL5rHWn6Ys1iSHpwphhLNMZx3vfJDWr1QEQ2",
  "key15": "43ANp2f23HZgDnFAE7koCmKdXqudcUswtCdFFgnAhGDyk94xnAF7XLDrKCiJuCVp37tznw1AGxziwKRAW99x6NMm",
  "key16": "eP6e1TXCvn1pUvZWKuEF8jtudmKhykFtNgyJ5f19QC9Mpb5xV62ZwvttanAp6yPm145enuB992JhWMLuMXyXRav",
  "key17": "5d3YjGRMfBo1qQFQMj22UzHkVB913gmjw57Di83xxbMc4iEihDr6UGsJDhz1nJj4FzQeEHYG6HBZ6HesgPx2zV6y",
  "key18": "3TfvMpRoGLbXELxFiQNfSg8n3FN4o7NTXNDyXxaNsCjpbB8UMweyY3VmPwnddwHuegg94Sj8H6oaKBy1MHd7Wqar",
  "key19": "3TcGHFbsecqrjNcqzsX4rHRcnwPdeY8gyguCYMaQm47bvY91LexMmEzE5fXo7Rn5tvGEmaB8N79zPucgXqZ4qpt8",
  "key20": "67ME95vZG1ee11jAz73ktia3FRnd3Ufbqkd4HYtZmGiCKS6TxULHDxUYu2Kp7Qoufs5utv5gRUBt32n95FPXYNjA",
  "key21": "42ZTagsQLkyUJdxRqUTAgxdGyXBc7mTvaH1trLv8VmkGGermhd2Bp31kZfMJNzrt8vrupdNRadzVvaqZfAGGxkS8",
  "key22": "2UkSDiLjDCJLYehTBAvLygqRmLcQxXyDy7eELtB6hhGFx8CGDHe9V18jfjxAypzspu7cV3TLdMSM4uLqSpqy19qT",
  "key23": "2KBxeb7BWXL4CfTnKJmSoW3oGp7uqxozQMgGrvzYvAw9aTxTi6JvveMtCRG6MXTK57BgYsquMu39uBXQywP1wVVf",
  "key24": "uJRiskn5MeANXUEAtBAjW5fyU69FnZBGd98wo6CMkLs6oGTQENZTVf1MNx39SicvP77QVCcb1uWPnayCQFPa5rG",
  "key25": "5JfFFKzKKdDtKMmuNZk1GEAeysZqroeZhLsP1HPMaGPgKiZHXuhfjEsHsTwQn2VPsoPA3xD6A3u817qmyZreDwAg",
  "key26": "4B3CBBpETa6BQvMQEs4XX1w363NyCgfRtfwaFwNCVsXqt8FSP9nopHedfC99C3UwGCswx7Pjp7MMH7iy5XJoHfCk",
  "key27": "3sDXeFNfrg22KhY8TDCKCxBfxcsw6iZ4NVAadwCGFGumzxxRZ1mK9KKJxaNWV1EhkjvX1VfX7YkDx5PiJkkg9jg6",
  "key28": "65XJKZukrvwevwPjyvem1gHpwgwkYCFtACiMxCVLpn2tccPH8g2qbHYCNwD8dLYDvhaKvvENUwsAU5knjoSWUZcA",
  "key29": "49whkw7FxdFgUnFCkmYUDKkFhnmLJE8XprHA2zoMyLLiq4nA5UgJzfJpAWSrkHBJ2QAApNLVywqKaxyzA6a35o5W",
  "key30": "577sWJcwzWMh65Ly3XzpVhZgeZRDeAxQjhmmqk6qY2HHG6vZScMX1NegYf3c4XNPaAkGkToynAksncA6NNVAqrax",
  "key31": "zWMkqq8FfjdsKwxKvNy5qFU83L2DGnyds1hddAJaxyP6AqeMatgv7VLCG4LEqmJ7jjTXUiqj4xwaKo8KZksHbQy",
  "key32": "XfhCqMz4x2JKpvdY787n1B9ecFR5v3ab4FMeBMQBruCDE5WQUfoD1yhMufVVXkfUKph6cnUsgihLrmy5nX1NWkJ",
  "key33": "59M3ZrG6gA3ecSwNdTbfkrk2iNrsy7xvwcFrvXvH3BxXS3FhZZrG8PLTnTnL4ByrZvP8PyyYwhnzK8b53uwB5D5w",
  "key34": "3StbtYj1ZfxQo8NNu7AMUdzTX1J5oEd5DyjRawos4ZiWEN212zsz3c5nCzvmsnzzpw6eUbVBZ8ZkJCz9Up3dSsov",
  "key35": "3q9zFDn47yKzZgMMGhRuL27tyurgFr1st23PKPJBZ9LYFsGfjviFz1Ztz7bTkjvaVz7xxH13LqeC7KsyvEPVKaLW",
  "key36": "35X6TTYK9Gg3WMTjtvgQ8Jz3GtbT26WDc2orcbbJacPEk6PGpRRgHeu8ZMBPJvGB3FQVEFffrUq8fYoNftaJwNKk",
  "key37": "Nm8UT5U8EJJzC898FrURYRTbQUEejKhxAYE7nf1LUFRGXZ9rwBDGueSwETz18DLFK1aJgBD5NTbP6fnFnRmasmn",
  "key38": "2QuJdma6mmrUNrWg1MfCcYQ23Wei4ix53mRpBGrS1kD26Dc9bekmPX1JLkYGF3Xb81HkXSHHrxQV8LEEoRyY9h1x",
  "key39": "64whdeBcJpzsBvsHez4eEi4UNqmpBAwdqxKwPc5jwS3o6BNUA2Tpy5a4wCsQExfaYTmpgtXH5RuXYyC8nqMh25sU"
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
