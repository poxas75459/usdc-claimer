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
    "4jt1su1HG9Xw6MqjMjGizuSADtP5iEJ8wc2gW8SauJSAG2jjTVuuZmVYD36fVPerjsPwBDC3z9WxGn5u9XGTFLgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULcyBSJDc5br3fohjQQ9bimFXuwVH6n5r3CLJHV6DYoo5mNhrw41Sa3vEDDAnMHgJDsRHvnnZHHSDdnRGdtyVBt",
  "key1": "4LXaMHqncprXVFwxEsiLj5pmoCnP1DaLHyPZ2LEi9CC3WZz2mVRfiPXng3bVzCGxRsLFjvYHaxWWXsEN2DaxJccb",
  "key2": "2Dtxe3yQqFodQ54dGdisawq24duYDMaD5o84fhWXnzXjYVAXpYto54ehctxzXwo8AP4RxYPB1uHxYDbYRE9o16UF",
  "key3": "3DLHTg1VQAXYabUkM4ed5dso2DhayV7jPP3f4vetFHidDu175Yq7pTs3qbJH1TSR96QPmGPGr43gxRpGVWHPaneF",
  "key4": "PW73vpuQdn3tAQjJRtmE7CxoVZ6HCRqAJohE1PYpJCMwuCVAgncCakzi8BDN8FRkx9TugPk87HxTjK8xW6L6t1h",
  "key5": "2mevoZB4KHccu781aiWXbfsiefUH39Ah2mNgVUL1otjBS17WGecXoWfFo4HtKUVv2ZttqYHqVmdy47pNsaCtnvws",
  "key6": "2r2XeoWut8AJAQocAWy6SryBq19RUovnoYfgwVFEPtaMg1k3EACYJ39Fjjbyz8KRj9k6VoiHUNobA9mydxbq3yxw",
  "key7": "4oNBgSvtrV3YqPE4V1n97pS5M2zTJvGpRdbUb1G6ajH8RgbUqQdT9ovmtFRuLKb2V1P5Gb9hVgd6Y5bRgdK2USGr",
  "key8": "kTyLKDihLWNJXbehd7ExAZB1XuoRsadkS2R4EEXgUYPGjghh1z2rxzL3DMQMHroDQ9ZuEY1Cg9ZxPZbmTGRwUwp",
  "key9": "3vGDZK1ZL8tn7TXWobFVZT1PYb92RbLgzxVKFQT9qrVQvfahdiJRhkqJbqLYLzy3UW8xzWUdfgbT5pzKhH2Dkia2",
  "key10": "3K3NkBGG5K9qq9gqzKT2sew21RxMzPj3Vd97QtDTwMMuLkjy7J6BRxVb7WZrQGLRr9DQuLcxDUyRZCv86K9k4Szp",
  "key11": "4dtfDxupCw1qSbtgf45T3LezW2FivzmtAJ2Ab42Jh4Q77mGYqHA39peGCbQg8WfEg6KoS7Vu85xjUjWvv7PSwzav",
  "key12": "38zF1DUL9D2WDR9KSQBEZu77oKkLzthVTSrW8sw1KpXgzpUBo9WD2v5rGPctMHYzoi5XMqAHm4bu3sSEYrD5Gdf2",
  "key13": "4h4Xj5XWHu2EZDZ6K2yRaoUiYecMcMZAKyC2YGSNBRhtbEt6B4Mm1cm5vox6EgcDUft3f1Pucz9QutudBZErHMuJ",
  "key14": "4YivfkqC4QQDYnj1utmwLsFabujTtKo3UwARCB1QeBiN7xFb83Y6DEjWFk4QEMsLJuidkCY3CvT2s5KvmbbudScZ",
  "key15": "45uvpnf5peEmDwKqpcqW9xtokyLiH632pNnq4xzLF2aDJNNgUAA5cZ1fEL3wn4Jwyxmyt1f6tADRRwTLubmETzgu",
  "key16": "4aRvvLPf3YeR5PxxzjY1ybMdYuJZYMzYTdnk9ctofSouKrA3TVHN3o7759Nos5VGze9rCo2UyKoFhsG7py6SLhB5",
  "key17": "Ya13xyUamuZiVLBzq7vQ744bXT9aJvoHwMzWN9ScaUtxfoy6p37ynCc8xietnKrFrnDg6kKf9D3Fg6GXTY4zrMh",
  "key18": "4HTXL61YeQiz6h69Ao7ECob54A4fMCnwChp5uvRdmYD2JxVECfkCHwHZmLKxYtUniMXZNmRn6PTSgL5FJ7f86uvi",
  "key19": "3zwz5rrMPws1fZbFHbq8YWcXaLgxC5qrVmAoLFqL2dn5qyYCxSUFYya8WXdB8PPWPCiehrriG65AVgXYjp77G9Am",
  "key20": "3pZ2sEwMUPz3XVeCs6pDXUXTkhvZ4GCbQqNSqaz6tBkLnvwqwtxoXrWMBekcgoZQyShGCET5PUhfYuYNPrFHSyH8",
  "key21": "2j58yUPCKGAWUhmTH9cvw3sk7m2cqSFo5V6DgLgpyRXUnAXNdbZMcuNmQTrF4pt1T7MhV4M2cHRRSpUw4erwsxcN",
  "key22": "2w6vi1ofhSH1G6NqqE2KyHjtzJsExEw6amgmwFBgnYM3NVQB3K3wou8pdxD7HuwsVj6pTjXsTHNas649UWpM47rC",
  "key23": "2AiXNYu3RBmV8XZ1De1y2RioBNSXoKT7Cja7kWwhCN3myKLj7ACfuJw8yrXGmWtMhrncnKxAKgbuqmP1t2MtEvNm",
  "key24": "2HsyVAw9EwwfiGJKS4vJrgoCXEEnsAQNwEsZAeMC8xq8Q8e2wnxri9bbLpG4zUmRq9W9Nmj26Afi89p8f1EFBgbU",
  "key25": "4WhrNYZXGFb5dHsSQmGfCHemUsxgCR3eVNWowGtkx4Y5fPFUuzhLfFmzxXx77Ryxv44d8zFAsQfHNkmN5dkEgWbz",
  "key26": "5iN93oXEAtvN86HXNKm3AEk72SrC6Ds8rWcgycdtasxGNMy4R8oYy5Qy48No3t8kZFsvAZ46eRibiW1cp7dYaVAX",
  "key27": "3L4QtvUWrbAZdQozb9QiGLXnzVJWYt1f5ace8mujyHHuQLpbBHPAdbfykX7HD3ipS4casT91eYBQyvVa5LjovPVZ",
  "key28": "3q5FEz68hVwTXTrL5NtpXwhPbBXCyQRyt5kHgfVMZ1Fp1vaq7g2ZMQnePFijbpUMC6yiBNjNT1BU6SfJcWWGZXvr",
  "key29": "3jmcH9aFMbMoA37iRJW678fwqRwRsZEq75G8HBh4VqkPFG7D6bA953gHhxW8MPd7sLGU9XBamf1DmXCUvVzQVNNQ"
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
