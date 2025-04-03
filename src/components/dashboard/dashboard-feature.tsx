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
    "Lfvqo9oTyGVHcyDTFpv7h7yUQqC1QFs2Fr74MLw7i5TVXH3ZAWQdC7Q8AA4SLuxWK8utUYnT1c7r5mazGeE4CTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EWsLyJb8aDqgo36s9FEpkDMpJ4oQ64Qp5VszeS3tsgdjQHJMspUihqabGBfQg94VTyrZSEz9mqsgTKF5jPtrpYh",
  "key1": "EShMR1nUMqYs1SY11tCbuhqbiZP2oJ4zSW3TvczvvmgFXAdfMGsBtP8BLPda99vpqGPWRo5r76s5WU5wUZz61yM",
  "key2": "5dJEE9g6uHTAiVY4oqRitkGmdHgPe95hy2d1LCnxAnoqkNuG5XybRciGsxbtBTCB9qdeYSuNPoMrf5AbUUt1z8pz",
  "key3": "42P6uMhb2KNutMN6PjAnYWRJ2Ctvu8mCNj8nneHoyrr9hoaV1PmYuJcX2f45RP29thw7qMrbPMBJpVprapFVJb71",
  "key4": "4BeYr9whMn2StWrRkXoJbkMxUrQu4XSyUsq64tU6DWmUC2Z3Fzkv3REU1icvtjKHHmgA6iSdjTNGJ6vSLUbRzGJe",
  "key5": "5muXbG54EvHizhhv6vwWuZpUdfucEW9M13EkqUr7Ha1SXx1svqcLK5xx848xS1qzZMrnvqgzBdf9LETxabw6bVDT",
  "key6": "ru7gLPfqTZ1KPaioi5YTGaqMX8KWE4ByYtm1WmHUZWWVVuZKT9dqMtFEMzT5GUCAXEV79DHcfZLW1u18SD3DLe8",
  "key7": "5rvGrQTnCSvSuMWrQzzogbzGYH29pBQtsbcpCD6c4Z4hSSjwDov39tYYPPbGKpEc4mbjtTHWYpUrZiALhTKbjDk6",
  "key8": "3Dqw5nfYWajmGCf59SQJX7hbTGrR9EmGtA3NTK5kgfXqf4sv5gpCDwiML4NPxU2yzxuaaZ93apqe7csGrz6BMw21",
  "key9": "3truBfSpTWGKJQuSxk4Qk6VAA8mMX4TKfLCPFoEjheKbN4Yc6DhQ8qkjVqvz5euWZUScSocPr8X7geia9LMowk8M",
  "key10": "5UsEYXMtPQXCNUGDHBM4c44uz8Rkz2impqnZmpgG1eZPzP7Q43VR3hvAx2LB2BdAvhjkViTc81kQ5kwwCmH8Ty7K",
  "key11": "2TXeBQLfPKDFVaqHQM5qcJMcChoMpnDqAqPQqLfwMfgzsQ4LUjPCnW7PkaaPtPoSHsxidVN9mqQwnU8Xh2cqZn35",
  "key12": "zUVBitqnRThHrECDSVbHSDbX2Nf3o7gJ6ZRtceNrieTDdRmTUoapAdzUiTabuGveyta52WQ9k5bto9h8BjQu6Qa",
  "key13": "2aZC7M91LtaS9Lm74vM3pwUzSw1QmGgVTGnbHwMYkfwiGPBWR5tLDnFKU7WtM6o2NkwTuu7rZAa8iWb2sHwFoK6W",
  "key14": "5GwwwfTjMFsBXcaZC3uJ4eck4vAWoybKPoDmm7C5uNAyq1fyGND4vyYSBmBt9eXcoeNFUzS6vXkTV2BjLzMiJ2MX",
  "key15": "5agJiisWV2CVHRH1bvrifGyoUmRpWvaCZj7pdM8We39pzmocoZftWsftUMFLSqYfgTgGuLj4m72CzFG3qVz7R84C",
  "key16": "SvTi1KscibkhnwWBfLrfAYiUzaU623pW699DRMSNmGJRLm7wCPwNbRTN1BemurfJWsBuZ3WNYZ1TMWxpmT24TaK",
  "key17": "3TXdBb8bwVHx2e1mH6dxGmxh1yk57WED3iB94pRp93LXYhGQdCoDnnv5x38jmedn77izCbCZaFDYyfBhu8ynPmry",
  "key18": "3uYEdAVqVuoBWH6xnRiaceJhF3paAXYCZjmcfT6zcNHDtn6Rb3qq2LkhfkuLyzXXVkuHGFMBvPe9WmoCDLjiTkvD",
  "key19": "cASth7NfhSR2nQ67DydyzmVCQrjNzEsnk7QBJqgAkWG4tBxWj7WC6Qg6YqisA9zC6H5r1c3tCWbkBHhyq1rDtNx",
  "key20": "3Qq24qQ3y566oLcmeX6JFTbMFo2eJQDmseW1JPk9DnFme161MsBFBj4pFr6GAB8LHHXVPWtvSds6EjHhgUTTJiCw",
  "key21": "4kCcN8f6JGxTpWtu6zZZjahUBpZ58hS1NJAtSd65TwNtm95Vx78Bgm3tTLrKR4BeCHao4f8H3wgD3dfPPvifCQR2",
  "key22": "2w1ApUvSDVjE5GKetuMokyQMcgc8q4mNMfEki2CudsDV4UsohY93nBLqEndF3yRDzdjmZ7ZiRRNvfLCrYn4YBU8h",
  "key23": "3J7ZcrUA9U1htx2FXsqhqFEEgeyW1ToNaDkQPchv7RU8CJNdy6QfKayj1bCzCoNo7QeUFHXffPs6NdpDxBfTgu4",
  "key24": "3TFdGi9YDn3EDCcNHFvUMbNfMSmBm8YEgXwthh9ZM8LbdX9ykLubeC5xsHubkU8ZhhkAkAwHYb3bcELYCThcsH7K"
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
