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
    "nR3rAJwRC8svwEymSzt2jismViJNWeoAn266h5WA3WGd7jkvyYGXsjdH6DwyxR5GpCceKyPTd8kMDWbMGv8jxqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ajvY2cctJfmhwMEgjs8egKUUsWJGyjHu7pCqz8tt8sU2dwYMVB9Y8fifuxtyprPs2ngmF1fi7JmvR32dgnoR9fk",
  "key1": "2NsR8nETanW8GXQ631ed6jSxcU7P6FTBrXEmiSbTUFXdXqpHGXk9NmgcweHWsxTuPd8u523Z186gNQWPCgZTNdr7",
  "key2": "A5CrYyGBkcy1iuoqKpDeN5e8br5bnyCoaeiQoJdMV4E8vD6ZXYrhz1ZBMvZVvNkS8XAUHxuPYfG5KP27NiGxY6T",
  "key3": "4vaSg7Czfge1265wU8YQce6GULfMXdPwLC6JMvQq5873FaXasm35QqjgXXKBJYpHZu2WF79rcSHbzHPWrm3gNXgo",
  "key4": "61hUr7QyaQ5mFezX8aF8ojEJk4QwqKT6EtLGnJgozdFTmgbHYQDr174Qy2AGioWoqyzZ2rv5uTZ1w9vVmfXrhm36",
  "key5": "4rUZfvScKXGTRQMkNYkP2zMamn1QjnUhwzxvd8VnrMV2xTbcuYj8qba84TBphSwDMiycUnjkPGSaGat8AAkz6tP8",
  "key6": "41GJtWQhG6h5Tuj195RJJZ9dNTwmPN5Ry9MmC5tbG9vPeo37atWymkH8j18xBsZ89EkFh94wVChXctDJ4iHU1A2y",
  "key7": "2DTRHoziUTkymEm9UdkWY5QF4ETJmiivoCzdHT5sZ3eiqjSRFQjSDoNwA5mGdxXfgyUsrGR2Mc2JLB2XJopaAeHB",
  "key8": "5nmPG66kYFKtuxtAHb3Mm418mtije4L8yYiasgWYQ4mdCgbozMEyGMKXn8NcyZT74L8eHPbRAeTXXyQxWnRFBKB1",
  "key9": "2z5HpE4ktPfaAqAVwr2WgNRsF682jVAxjShdmXVW9owmFBghhKSjdRHmEF9ULZkGfrziK9zgHfLPGVc4QSGXTn94",
  "key10": "36MqhwK7uHVHTDGWb95J4yvEpTNq5zghemcXu5q3rgfNYcMVQYL4b4b9Skbr8ogCi6NZvgqHgaz8oGbruZXL9Vqy",
  "key11": "4aa9GeU8QyJb8VrSRHPYHhnPpAWa5ZEQ98M4e7qVXun2gtRo8S1LY8j6tpWdK39iMLkAcj2TZcR5xr36K5qUyZkw",
  "key12": "5T2zCg9k334vMdUKbVoyb6iS3ihYTx1XYGn7btrECVzcZSB3pCj2a7MyDRMdf2d9pwE1kuvS6hTc8ACNyvP9dgU8",
  "key13": "62cLDGu7T7K2omrjxxbKvimVGy6PtytG4YKxYdH6f1eDWsGWDCYDDQB23ob79P4dqc9HEEV5s1oRLC3zmeddcoef",
  "key14": "n3zHDxSWtFDdNGDh6FZiWKwW2vdnJnKRhab4xzpwa1RoNA1o4AGJ6sKHA6PEaLDmbQUCqEZ6KJWSYtPfVPDsXYm",
  "key15": "34v3Jef1keE3RZSq5W7en9EW8otPeYorZPUpuv42qMvBPbJAkdgkRgdaNJFEDHSdvYE4RHiSTEeNdoEviAbPGFbV",
  "key16": "3keJbNavbwMJ1QTGpxPnfuxTmQhCMQM58BNzy4qkHeBZ2UqdHC7HQgw9HUtamvvgQfaZZgLCaVJ87Ynz6XRxTiwy",
  "key17": "4r8hkpHNSuPgJqrJbfmiJrgAqU4tZfSQ3YqWM1Xk7UdXVkH9HMTiArYw3MeNgatP87FgBAbAD5a5dfnADQp1ujtb",
  "key18": "3E5aRL783CbwREDPa57kqZjuVBuHptei9hs67aJVUr3pgkTGUjuLq9yMTKwaWRtiDdj3v6VMWZ9daa3ZRFHGh2mj",
  "key19": "5v6ipfyp7YFgRpaj8BYcCv366Hrsxi6BpooyzJp9yi8FHp2BvrtEW3oKS8LcA6zacanzp6vpLRUgBM56Jo4TJAvd",
  "key20": "4MRdWaMKQTZwLpyAB9HpsPEFabghy6nGsAYg5iGzB2D4p8Fym7dRVED9m8hRjgL6ovyZoUVeqis46TbxDUWyaHLy",
  "key21": "8PSv5v3VZdLaonhXu8jtHpuFsrCE1zaXicevYAgKE41pg3Lqw4G5pdfuR3k9L2SnK95ZsYWjbUQfuzpzKJWJFXm",
  "key22": "3qaPyZRnkTGDUDAtiTGq71VqXVhTSdKqPBD4tw11hGPDdCuEhHvGnGULd58k6zVvSyHMkhvUjqbShafkXF8N1b1J",
  "key23": "d5fyfuSMWHxicmWn56dR3eDYzkSFUqGy1GoUunLpEnUnMqTqrYf8j2qPHCvw4K6p7zQZ5PxKd2Kh1ejb2p7VA2L",
  "key24": "3TC7tNGrr7So2XZJFSK2x3dMHr8PvitYMeg8gb6djBUN9RDbLFgfhujS6WoX9aZihJGuQmaA4BR8KSfU8od4QRcy",
  "key25": "3gk8K4WHGWcVmvNQotvnbscqMhzfxTRGx8SknZpfytsN4CtTcgLNR6AD37VC8LtndrZ9iYLJ13L31Qj6XmsrPSLu",
  "key26": "2NxX2pKh1T8JLQ6R34XHTj4s1j1pb1V5YZ1nwRLNb4fH8vLAXV6MviidmESxqRv8ofasCmTYXA3dRzA6hvGRvaot",
  "key27": "2VenLveFQUU2hvSb1dxL2UG86zMDnU7C4m6i2v1BRcMu8FLnveBwadrj2C7HbKGyWvrQ6GEqHBQzvCviMoXtTBKF",
  "key28": "2DXknVGM55JvefrdCKRB9fM3WsuzuptVWgPD8o44aNkFRVpmSRvJ5SiKq92ZFY9CA2CnzpQ6oMTVpC1PYoDhG2io",
  "key29": "5iR2XPSMwue11rkK6kKuwjLJXEseMMTJJbCkUfo9nDuB8vnJsDm96teTCRkDbW9NbbPABtPB5qyMaMdGrywyW7yT",
  "key30": "64BtnGsq4xVXTMocXS64BMzg6vuw2YWU9qJXouBQ7UPWDXUvMqKg71ywAvqb3rWMQkHgRd1xD6xheiVsRrGrU6VP",
  "key31": "5zx31siBeaN8BVnu3JGBW5TNfbx79XMM1ihTCnRPtJ8Ak5thbRNsHc9ccW5gF11vcSg7LH3UtR5uUQYpA8asZbEQ",
  "key32": "33py9HM2nd5wPsnYgGzHQp4esCpS3YsQWLM7E6SF45bWeaeFy9VnGBJZ4F2D59yb8jSqduZKpAQ3PwaRLciFipxU",
  "key33": "3bPPz6RGMNcGqRTXB52eSqjJnUj5Nm8Y3jKoTvSJbasf5M2X9MrhiUygkog8S4QKyeHPk7myip8wJnU4HnmdX9gP",
  "key34": "59Ywyg9sPDWGmAWEHsNbi54H1ggX6rV47kXfazPPgTsu6HG2pU3S1Noch4rEGer6RfHS6JVgc9xtWsAptdkoLgHo",
  "key35": "31akY3BaQvvjiV1QDH1cBkPyr4Hv3bi5mRtCCNh1hRc4mNUAKRWQttCZNH1Z2ZYKYtg33PekqhKZTXdYfbtAtFbY",
  "key36": "2fbYdxH6WE5tJRFtQsLJFkXvyD66rwKbsfrizMLYctky9vUhBeN6v9nk7Gvs8SnsPthBiRZGFBt8ySQn9ZjgLac8",
  "key37": "2k1GMSwsYJqiykS1XvgCCR3ty5pjtZsxgRHhAiEYmzYFjuvNb9S4UrWhxVyaPTrdTk3J9ecL2dTp16YriDpCrmWs",
  "key38": "2Z4xgYa31pzN9P6K7bLxHmQXWGDyiiCrfinoG5m39r2xLPgjDCeu1r59fPGFcA7NqZmbLv7keftjUX4nVAvLNkFf"
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
