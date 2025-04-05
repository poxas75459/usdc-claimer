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
    "5zMDeJfyQbYv5jvfAcrmzjU8JN5fdMsfAWDCb4dZtQnf7xLSktvpjGRYmXVsD44amm6r5i2Fw2XDGh6X8s7iNfG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qcXiGhdaZaLoHzZWtwLspfR9PawbGfNcg6ZNahehtiEqb49pDMVHX1LpPSnn5ZSfQDsVDQrLDPB8kZTETepj1Jo",
  "key1": "2xxWK4rAD74hBwhn96qXshhXnnu7spyHLEfQvuaVWApBbXAPyLyDbsWyBiqyHBn9CtKQdoy66C5nic15YMz9bTXD",
  "key2": "DHBVyWanpiMV3ZpYwX7VRgu76vsepz4nSXGAmL2mo4y6srgZTuSHxvsHK6T9FqwnTbs8oDwyGHhnFBJ1sKQgvDn",
  "key3": "3Joqon63YBQ6aHgpciAeidaSviRyUPExwkpsf5tAJZ41rzn4TXgNioekJKKk7rA4YmCdACK5DjzMhTUA62s8sP9P",
  "key4": "5tEYUXqQoaJBuFE84oBVKHTsqvyPjuzDXjnPTHnmfgQrvu45CfHTZTfgk2LJQd1XG9GgwPwG1PtBrezXBMXQ6Bj",
  "key5": "25WpkzBQWJxWib64s7QXjWPndvAFMgVuneuKu7QFtoz36tExbWfjjXWTwLx79PNknNc7xJvogakmHvNZmb2vhrG9",
  "key6": "4J2H2XfQsF1Fa54d66wK6YrtcVQGigcnD8V4ofLigbDPwddSFTxXmH25mGFErHdWsRDhwudAikAPY9tUMF4st2hx",
  "key7": "4vxoMoEDAYZLw6h5gbLa4fCZwjC2mqCfFF8ZmyzEJMnVZfEcFgXdk6ykUhno3H2Po4Mi1xjUm6Lna9xKv7TotALo",
  "key8": "5P8RQk1T5ttEidh1EDujUYGxn2fBveda8qSkGtK5cVB2MWNESo5YHZqU4kdUfp1ZRK4Kj9vxZsyHMisF3em65ZNh",
  "key9": "5HBfXiX3UBnmJk6Lbi5VgLMgqBz9y9haj79ddgqdbzZCx3CvHuEExX7Kf23jZ7NvfMAzAtkjiBbhkr47NwVGF5jy",
  "key10": "4XmJsYdsXU9euX2LoFBFiaBybLjP5rnF9aoXusJ5KPqqkGJioQoraMNKnPkUodCj1YTQTQvsFAynMjx1WKQU7thE",
  "key11": "4rEQYHBAiJR4KvtRmoXPVHS5DL9Erd7jcCXpSNoG8mTnYvrY7JKMm3RsfamYwAYEHG2pAibvm9nk4GJKjvMA4t4C",
  "key12": "ygwt7QGXhkcwfnnWHhXW5W6gRi5KWBVsA74fDEJS7k4cJgXCLUz7FWr34JNpqSqFuh5w6BzP49N1y2ow2xiAfBX",
  "key13": "36jBc4VFCAJMbaNUD6VECzABURyqzp16voX3uLu29drGec7V298g2H7XnveqNkTw8Zp9jeeEEeH5vhT3JY6zCMv2",
  "key14": "2aVEcy2drzeCFewexk6VYn9zi1q6ncXYKYnaAnxSGhjm6Vv5Snz4McaY3KxkJ6zFoziXMFUVCqBqPXy4UiAtFsVh",
  "key15": "2atyqVuxx16CcVLYPdDcj4brtnspv559X3FZ8XVTjTtJ5sw56ePk25pXE4XZoQL4xaL4bySwgDwQ5ygSgrwFon9F",
  "key16": "PTcY6qNdXHyHji5PWaF4MtpvJhhQSPd91gfH9TdeSiPsjNzKfqPi2mG9ENLczbfikrqAbKHvDumnGWTGjP1BALA",
  "key17": "61gDgdwJAnZ7T6ZCVCZJBpx4JqwGvDUnPCCWpjtrpVUSX3G3hZEeicsXtf6CYuJS3bZEAPVCqeAyw9KuKm5RAMoH",
  "key18": "qoofLuuXBx9bnftF4ebRnx1SimUNtGzHgm8UENYfbhmLCnT6KdRTajJfs1MGEqa89o9Zz5D4fyQ2gM9xJ9E7JKH",
  "key19": "4jQ5jgwxqiiJmnvUVX2QGD69ZP3zcaNqJYpp6VoQZFZZtw8UN5SKWx9HwEyHtq7Xj6f5kf79dAXKjN3x8XZbJE7E",
  "key20": "2WxTckQUG1pSumWh7EVFVqozVxzq4jmD9FwQ3LGowXNFeZBp4DQw4tSzDC7LK8E8eaH5GU2zYR1WPqCfSgSEUNTG",
  "key21": "4e11WxMF8PAGF25DFwS9uk1CyTyNeiyttnhjQF4Fnvmzb12wyx1NLELidv3UaQVUkUge4U4RsXeV5cyF9vGZWffn",
  "key22": "nRhADqrN2k1DcaKjYmUWTWS8SKnELpHegzjbJRthpncPAUxVVFfSW1j8q39dgxrDkdEFJ5PaG11jGRvt8ooHyNw",
  "key23": "qcq4zyzQK7qLgQSYxwdmRuUJtEcNhWsycffrJJeyRD3sADszkCj9j6iaTeGVeobroeiCsgK9NZ9rNLzj76111HC",
  "key24": "24wZMumu9kGJxEPZkKxvRD9SemJVE9C5Ad4iuKX6FW3bX9UxgeX6mMYr2URmeTgmBd5wYLFT96WmcrSnq6eTHD1C",
  "key25": "66QYBDUWUHPUp2RopJURfUsawJzg6nS1Jgdz7qgEjnnLLBvK5u3NQ8vXYSp3ybipv2qENw9RfmBXsDMHoz8dck19",
  "key26": "2b28k29EiiEZdqnLgYGhcXWpmZkhvCMQHCUvyHuH6SpXYJDEsFC4sum6wgCc2tX3BkqiSYWkurVCj9abE8jhW3GF",
  "key27": "5cpmjoDpsF9bnGaN9rx1axKkqnoedr5NkTrmBm4GFM8kGAMYxxhjCKJbpiCQ6sF5kBvhELeKgvzt7x6Ch2mLJUVM",
  "key28": "5sCXQkyf9c5kxtReV3a89zWpo2m3wGZQTkQgeccvjBsVNKjiYMmpe5SrzQqtBWVHLvSoZSZqFhsPhQk2zXzw1diR",
  "key29": "4YY4nzQqiFeGertvPuduH8YynJg56eoS8bLgvh7aUeHTzpBtALyxtgYCHTA1a3iPPdNTgwmWC5CGeA74FBwFKEaz",
  "key30": "4nNVJPTpbmwgwwjE9iVxup9JYjDLN5Rf4d1n7Tvubg5gmjamjvVJg37MiNBnQWJ6pCL1gaD8uVAQdpR5ahP1f611",
  "key31": "4Pj3taehw1erN9gYvV4gjHRVb24dxgGa9Gse8R3TpgHJujbNnUWXrLHiPTJUgumFiheXi8ecL8SJVcDZ1QrL2oeT",
  "key32": "2d1c9jd6Vp3ta2bq7Qnya23fvEwgditey1UcZ5WaHpWcQGhqMc59QYVTU6ecpPmwKf8asiPdmWpkndFkE86mC5hs",
  "key33": "4i8h4CwZTmcy8WYDTCKeD9qX1oks4BDbQvF8ZRbsMCJnUt7SGjwDcne48sXUmgXKUmZea22sT1XcebFPL4cgvwhK",
  "key34": "5DBXWev3LdRYMbB8z3dUiYcciqBdbFWJi9JpYDkyBkNRb2rT2BpBb1ixdnsyPHaExFgP6Z8KVVK7Pf57mTLqBgCF",
  "key35": "XynGTrq5JDbKBzFXFYHii8yaPzWHZiapZ31KQzBNWdF4MJ3crKgAdTJBL63rUej2Q9LUPwoeG5m4gsdfwwCeFsC",
  "key36": "2HXcXQf6t8oFLa9DCZRvKwrgsLouw16t1ZXTaJ4XWyJoCUXFGEkEoebACPphdHKci9C3zXo6wdud6NkXcdnYsoqS",
  "key37": "2SN7qtyo6Waw5JnHfMsFgUYKsfAxdL5hiQaubEqBuYtGdRv44stdF6jEDABy7La5Nx6icsqYZNoHME7i7H5GPi6y"
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
