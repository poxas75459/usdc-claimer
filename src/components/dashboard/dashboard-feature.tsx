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
    "ArSRNZP3spirh7hhDNdTUt4s2RLCXciAdZj6iHNm47QUJ55db2eGJSdHqHFHkXoFJ7bcKBe59su1yPoc6z2MpQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VkT3yN9CMKK2x18PrheBt928oynKRxZc2BfN4fxMndtyRBK8nj4xM7KdPvTPpyRDLvHBKq2HFirRvVBmwjUkGor",
  "key1": "2wQWNRduYAaPC7R78TJ2e8Et7owjLEA6vVyW5kzua8adWhmiWZ1hmoKSh1iBL3xexWJoRx2U472FfF5JUe6w22ns",
  "key2": "2c18oSQrDA5xmqEzXKimWXECg4xNJCJ47JX9XYSJY724LHovYrzuPuri3dYGgg87U3UhRo21zhqbAK8hqe2TEpvP",
  "key3": "Yvep4W7rusgG7swpyZkFowhHtiQEZ6cS9fB246dragdowxJafo4e1Kuk791f1YQFEMRgvzDMwhCj61prN3Picda",
  "key4": "5L9BqecSx3PPx4ukw9WpWUZrZM9ju5HYGMsaSJkKGWWpVZrCZeBEELY6MQt57m5h7rwqHj7zVnxanJEvTbuqVmNH",
  "key5": "pifE2CMDxg27LUNftgchCZtbWJPcqcU23BnLqM2xSSak8MQwuVmRsB51Vjba6EoiU4G4tVhsfNh4fn3x8Pccz14",
  "key6": "59RVCzxpFsCQPqwjyFXrNGARqNgKZCYo9ps8dsDbTXHjPiyj9FbWFD2rASWa7So8eoPsusuzKpmNNSbuKN2W5cZW",
  "key7": "2dpCXHKwYPfbBzTrDRGYFjfrSjmJ9faq7T4ZH4YuyzZnNdCkDd9DiTUkvqseNvYgFWw7rzHwHTrREoMdqtb93wkF",
  "key8": "4PH2d4aWuF9KT6rkWU9yJ2EqenjjMFWKJPEE2rADxZtSXyAbUkKTkj5LV9QYY6HNdCqMxwBibtBS4Vonvfti24Ur",
  "key9": "ThBqCGqy8ZS3HUKvMfAbiDoPYAhGrthrVDNnDchUTEi99K2RoUUs74vthwV3Eho8NFsSk5N3LiV2PiXpi5Em6on",
  "key10": "24CfpWSPA1DHxKr3T4FBnrTooTeTSfacxwPjWfoEdhXxPZKhyiAkU2kJvX4TX1WxdXn5UUDLDmYs2V1LV7dBbLVw",
  "key11": "5dRwajhdw6kzxZ14ARAYWFCTy8Foz7w4YvtRFJzQoovZaighsjwA238fgBJ2JWRYkF4WjV85gE9dbrvkdQ1LAW4e",
  "key12": "3ydZorqxDdWAWshKVdRh4RQ2DAfGFBnpL72ZmD6xktiTQZB7nokKwyxQxNEZYjU9pg2HQj8RP6nC3dvELoq81HaF",
  "key13": "3De5XY4PjpWYc9YDLdLjbQZgSQqSWb6UPZ8FDAGb9BLs8Fusxi5EKoGQSkdbHkEYeckBaETAGLMRGAx7QcLNigeP",
  "key14": "yDnMEdrQPLiitDAKrCm8epYe77ZvtUhcKiJm1yQH9xtNgioXgCsp5nH3NEUKqS583sd5EG2VRNmNz2VpSyTNo8i",
  "key15": "4hkjALDFAmcUkwcdrFPc6zM8ignUr1KuZudmZJVH4Cwf3QprEvSXhqiF8PnPNLW3pRwD9VGLzE34DWuV2PPLS3Ha",
  "key16": "61fdi9njoUTqVh5xPNY2meZ8uzvcqChwR4c9eyRGSGCxB7kDJ9QwSM9CzKcqVZgbVKKBnv8jSsWDXaQtB7SpFsnm",
  "key17": "2z9GFbGiottggZdiBhENJRTbkpksyPmhYCBXTXYrwYGP2h3L4QK6QsqxAXAUM7aS3wmbPiyvSUpqzBrw6HbVtnmL",
  "key18": "ivm8YTadSHKLrSyXZ8dQWHF1W7x689dUN5mD6GLKfUwhrFbmEMFFJnJgMSF6SWNS5QA7VZ13SAHmeXHE1dc4P89",
  "key19": "5zmvgCfAAGdMibpRXRSZkUbtrNWJs3Vvc5kG9tYrK3tbd7HV4SNhkcHTvEEh4Wv7CRzchTYtuYrV1sdt7YS49k2Y",
  "key20": "3z2eRs9fNqAuqYc99QdzPFjZEpgzaAEqhugpxSxPL6PnSmonmdNT7URFxetLvLSM12aya3ctkHkfB7TtHupEmBf7",
  "key21": "5mqs1quY9v6vaEn7KwGFmsW4zxF66TAKjf8y9MHUx19jhr3abRDtamfZCnqYLmrg3Ma7gZ1KMvJfBazfLS8uQYhN",
  "key22": "5Xm6oVtLn5a6oEgGG7RBZqn5DrL2bgtbMwcZ5muyWBEno2igcgcyYwvLegMxj3qm8ViZwAHpKwix4f32GkRRnW7u",
  "key23": "5uPE5bCeSPMgFp6yJ5w7aJcpgRbHnb9KHwL6Md2QjwMygHMgVw5DvDNcy77MUWvh7aQv5FPZb6Dz5zzKJGazG8k3",
  "key24": "3Z1QEj7Nb6RCvu5qQJbRF25EPpL49eeDFvPH7qEppXiNwVxm15dJUhcBoLsyVkRz9JceufWTRrQJFoDtmo5C5ATk",
  "key25": "2i5Cko3dxGpYUywUnCDV5VajSHVXUErdgfB5pCaEieVs9Kk7XyrRHChTEPhtSn45W1XXnpzZvtnHigy3mrwozAzW",
  "key26": "8zxJY3H5UyX1hwxLmi9Gy8WZdTzZsMFPg9eRD3yjkceQ62EiZZ2B5jhKe8uX6q9A2p2YKYLHF9fwx7GkDEAcnLB",
  "key27": "59fJ4zBhswvg5apvJADxhMy9cg7SkQKk4FEu9pipG199M3bg3CqknNUL3sCsvw3PRTHCjaUxVMy2CjUVNegM59Dn",
  "key28": "3RyVrUMW3CKV6RfhPtnigPxyWm4UinZddtaRfta7q2idffepQQvgWFGmFmjsa2uEwLANVRgFTHdaLbyhhd6E76Bk",
  "key29": "2EimsqHEMofVvmwaF3jnLmhiKVrTGDbWMkmCG3VRHa8MA45qdooXjWh8xF4rFSfhmQVKJpy7HvkMiarPyTJjKvt8",
  "key30": "3jhFdTP8B1hzTF6foaHiXd8TmeELoEvD8pmxjtHSqKGCCjpGLj6WcWXVN9VSPBJg6Rf4njgSvS9KxL3zd9YAYQzW",
  "key31": "2fji9vVfdeK54wv98yDyPFDvgHN9FDzXiKnVzN8vEKb6fL5fbuGKgPmWDgyXfjTRVLVSh68hwDDmfTJRS6aQM5fb",
  "key32": "4pxfspEborAPFay2nM5sFFzf6j7hyudi4q9DJBeCffaWAWG3L89kbv7LtEhkmAM9m6QvgWLzH98qDXPTz7BvRX8q",
  "key33": "3RinocJ5V5mjgW67sjyL2ZJZya5i1214LTHk21Fwv7NuscixsQEuKwx3L8LRXjF6diaBCKr49PEgjGahzducXsHa",
  "key34": "3T1Ti3AZ2RfUqeFJgz37nXuAnUa4oeA1HsELrNCNCfxwJ3uMp4Vs8cVzezUgD3Hccp1NeBfy7dPP2AeqaGYS8bFw",
  "key35": "4RpqCQrwkXby42WapBaLw2wYgjqLW9kjEECsf1qZro8AiACYucRY6kRbg4b2HhKevEK85ucHFyP2csZyHzxXeVCJ",
  "key36": "49E7Uy61X4VL9cF5rvtmPUgymHRrmPrcDXsHFgWimNmervH6Prsvg21Ug8gW44SEcz2obMo3BdENropYcBtUCmtY",
  "key37": "5YTyeejLfnZNoN1eXxBQdci1na7LSV4GgQbJCsn7FctQyZN3HXMkZChEr9gnvqCve9vGsNA9K6qmgUitxmBAiLdF",
  "key38": "nKseE3fEsdyYT5dfXVJcEj61N2xrWvS3UuHbLKiVN2heToXeYFR9RrxX1NFbATJtzM4eVtH5WADVay6fA37iBM1"
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
