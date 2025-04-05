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
    "2aLXFXSq3D7aLvALyzX49TrcVkGBvfkpJo6ZL7JYgH2NSCR9HApQe56NsemPCiR7BqouKJFZbr7HpTmSFs8D1Xh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WtA7yHVfmUnLre1VVEMJVFwDocbYwdJB7bYfhenikYJXVURTRyh9eGhGBAGiZgpeiycLqUXE1W8Ay2qrQ51cq2H",
  "key1": "4GYztFUTQGPuaREgJwoCx2SYDv9KTLw7VTB6ivgskn14QtAvkaauWYUpMydcPSQRXbQie6QnNBbDRUkcMHtKLdn4",
  "key2": "661XHzUbxS3Bf6poyKckL7Krmx8sMbieyab8HCgiQdbe4KCyQxWy8Bsbe79i22wh4DtwPhbDvsQq51LWJfkiMq9E",
  "key3": "5SAefCKh1rDbqHuSHrznRMZ5EKvFFGyFsdveQvVWs3r9h37mjSrP6pDiVtkx8GUrk77Hvn6LpVch7hYaYPjSB8un",
  "key4": "mXnUWTYVdBnD3ynxj9PRAiN6Qu5NhZcRKA7x27tXPG66EEi5ZH2rNghRhxRXnpEX8SQFZ2x1XB3HBt9WaUu58SA",
  "key5": "6ZMdxmXh2SctJCuLN8NEKaidj8ZBRDREJvbqdWFcnSsSBjKXgEpL5Nek35rcxAU7a45uK2DqLjMZribNg1nP8wS",
  "key6": "3UKScusK56Gb1sfTzBnVDp35SwC5TSxtS5HzNFzYZi1rHD3uE41idPfE2kXHvN6ykzKrhH96rPdtV5e16YrJrxX8",
  "key7": "3nbpZDML4acZgSYYWvgMW9EvYVDLjyyUmMd3Ji1L5igpT29cssATzfYVsx3rYgiTFAYzPRwisLdBYr41qpu2CVbR",
  "key8": "22DKcpErSbZb5mrbHx18vk6MeH5WYrVH4mhX8grd1dFgYNhT8RBjPZQkyzVUbJQLjfUpkLu4agG7pypK4ba9KJ1J",
  "key9": "3p8beGeDTxjTyRmBBraLoCd4otykfhWqLzLUKMHRhmLUs3hqW8Pgc4WG8Xt8esHsy1PaeNhBsmaufvS1B7ZcgAN9",
  "key10": "pPpLuhqwrqowWWJAdbfpEW7TCwpGtHpNvCCQpw3iKkY5FDqjUSKy6YL3BY62im3UMRnpb5fyipZR7ZU6UPppf2i",
  "key11": "3XbS51dxhMEGTFy6oFXWx1Z7Z7yNpb1JvicLfJhpc2VyvSfBFN1tghfe1JXui1iHtr3EoN337GZ6Vm1q8Pz9rqDF",
  "key12": "34abV8r8Yc6TRdaWBHuzNSBpr51AiYdTZ3w9d5Kh5LnywRf42hfpVmXMUge2S73NRo9cwPAHQvN7Gk74XXg4iDzC",
  "key13": "31fjikHR1jog8YciPuMLgi65iXytkTBtVQcLmSja4UHJPPcBhozM5cVWG2v5VFyLzAS7YiYj2LFa23y9uKJWFf9b",
  "key14": "2VeenYake3NdkJcDP1yNTFhsQAAH7AxuDF76AWmzhqgLLuix5YGXCVbq3YhxNkAinZH2WS9FckYHwiUKEAQZhp5H",
  "key15": "48r39ZZxpYmuPdPgGNCy8c4EpvtNar4DiTNij6C4hNccoJ1ZqDPJjiNWbhRzrgja8o11JwCuCxkMRHzVu2Nk7iRH",
  "key16": "2vbzuxSTnLxNtceo6ZRSRF1w2eqS1X3z6j1dRbfxPzYSwxLoJgLoCxT6RpULQJftPgtB3YvdS7Pprw3cdPTcj315",
  "key17": "5FtYU3edWquL9V9AzLpEa8rVbQYgqdyPUV95uz4KL7QbFtK6etV7wp57C7fqV2UoBvq3eDjFjpshuYmHjpwSJaiS",
  "key18": "UYTvcBPBijowoYoyrBZfYYwG87pMF9f9NBgzav81vvWXr9EbG8Y6ytrrV8Yrff8F9K2R8m1JVRKzX9W8twwALpd",
  "key19": "HZFJi7F5htM8q773hJGDEgJLxv8MyvVTZJbjx1do2r4CnDaJHTcN4zmUnqhKdZTrdrh5HBkMEjSTJnybUU2WPh1",
  "key20": "4XeXbKxBLzN88Z8UoPdjZxbAAojWDWL1PZfBeDMAaubZotLb6aXXy4SFMwzgDGsxQfmMQc9MkrDaE1UdFQqVRnWy",
  "key21": "cnkhW3iQsCsak2sHnSZQuhUcdskrQn36iD1yfkb2FFCN2RqMKZvhRfvH1Vtvx3u51YtbP4CdahMkgQkLA2pT6pi",
  "key22": "jtEfsj2egCZmNmG75qZApnjmFoVFduYXnrmLxDKoVCVJ5JVSyebsSutNY66s4QmK1L812P6AxGwvFD4cAqyfGd8",
  "key23": "3c31G2nUUpSSL9GkndviaGqg7kKrAbzJNnQkyBgL7j7khnRPA94cHBJBU4HGG2qFeQpRvrr2qBVLhi2XRMq1zsnG",
  "key24": "4Lodar3gEynEZF9XXN4qP5bVkFRWGiMxjijPADxG3vsSnFYWAkJnPF7rtQccz5Gywg2rRER5SLGZq38vK6RFs5Zv",
  "key25": "4uSsCHF2JLKryQ2pjDp6nkN2LZQkiwGuTQyvkp6X88FYeQv92ddHLgzA18jy7QsU21rWpBWCkwMToPRJ9djofrs9",
  "key26": "4GFMib8og5YSGGf2R1zfMvdNe8ogsVY9hMUws15iNiiombHFW8ukuSCSomhqjewEtSC2pCiRisYP35cuMgYZzFZK",
  "key27": "21GNgN21aQvR4QGCkTdjdc9giosxXT8LTBoQB6tRr8TiVBV3yiJXh1RW5ejp5bphTm2wCbrwt5ztAVzbgACLcFev",
  "key28": "wzTuYGEJ795SyuGxnPdWA6enW2GLkYLbpAg8Mbjaom5iPXQL6EEnAGiHR443hcRJdotwgZm4GEN7dgavE9jbrdR",
  "key29": "4eDb8BXoTedNCbmQxmk5V7Nsm8HzWzbdN6igbEBVAGRGBunicKtYzawy6Zt38EKqtNwPCfMu1LLesgn8ixmrk6dG",
  "key30": "zFHcysiZyQ3DuMb87ZvhPafcreRbDYLLrGk7PCuE5Vb6S1oCr6K79mpAygMJjksQsUXptvAbS6PXptHZBroRLiw",
  "key31": "2M8g95PUeqaFsXDxQzXPV7Mgf96Nih24uKsJNoQVacVYergifSjq3KXfkXm8ZfdHJETYa3HXdivoKcWgPGzZdGWm",
  "key32": "2RVF51bGYw6tkUnUmnrnefbGE46yaxHqXsov49wGEsAVNpocoaHjjgiA9t4AybijJMEzp3Jjze19vibCxmALAdUs",
  "key33": "5pv8WvRto85ZNVBc84vxffgs5ZxVDUzNjdYA42KfsireSrmYdizrhzUhmrjoj9T2a1SDTm336GGnhYKMXADQgo4V"
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
