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
    "srj1UQ1a5N9HPFWChLDHYcKm3fR6sMqkv3Aj9XAG1RMDzGyHxrw6Kkg4vujbQykoYndRuBbFRWyhqWWpHE7pNNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tYb9z6KRFScgeRyetXDjAu2GgsZpD1q5N5ztk21F6uTHLbn5nSMYEwAzvAhtBo6r1Wqzg7fkUYpeH3wzDyR3Lnw",
  "key1": "4bQzVJ97APBNtcbGW3D1kEQEUpK4jTxAdkQgkMJdytA1DZEPNXpUXTmBbGb4pP9onogsLmhQ6L9cgYUAvYD7g62V",
  "key2": "3dRDVH3rfuLrvaJxztecDesUpdvNwBb3rm12yjXh8JkXcdMdKXheEvSYapc2HLfTVqvi9eQR9gzUHpujwse9cAas",
  "key3": "3cWijJiEXcz7kUAERdST7svq5WW1uPv6EGUTW7VQnPRkLzTaxgDWkBumYx4c6rnEWiMbnLgeB7BrwZfVk36KbwmX",
  "key4": "5M1jqkMoVSUwUgoK4rP7XhFm9VdLZnetBWuE6pC5x2sDp7Z5ZreVuPdAt9CecN7vo7An9joEQ4zq4bSffsGe5d9Q",
  "key5": "CzW2kW6gavaCS6GAgEtMDZyMAjYZDU5bHivWDfxNkdHmYYgcnKMpswoxjgDDf1Ju8wBLhUfdpMccvjBe9aD28Mx",
  "key6": "2LGCMGY8dNJNCZdg6rj5dxAschaWJDFGZoK6twxZ1oZXtHCAy6SHwRAvFPvxSK56NHFevGsxzs1Qyhm8JZTaJg9u",
  "key7": "2GyUgwy6s5S4uASh59hMviNSgLbu8NxocaQZEYfAYp7u1eRvTpfTHG1nP4FtCdvs7zifTNFLm5SkT2M19p5Bnrpi",
  "key8": "2wyL8GPNMcVHLWmjiWU2NpezqS5mB6N9PtJSUvsBBzm45Fmfipwdb8jSK3PX76HmesBF9rG9ha7sX3vdb6NsopL8",
  "key9": "551J23CawfwtSWXogTjZ6BjsQfxNCGNFQopeWdmDCtN17NRntwKbZbZ1pGRS6Bzdwrd7RZandxW6P9E5mPDpmxZM",
  "key10": "2FU4f1Byaa2k4jurGLa7SCmN9Xi2h94oiW31AgTK2Ff2bshnovfdNF17Lqx11USpACw8UVNo2Tnzdnhfki3eB6T5",
  "key11": "3yFLT3Dy9hutu29i4jJnDogsHH8EkZKjp3WHJGUMKsP5ViAvXgL3YfXxGwHiFCoceRQc1Putk4tezeqY4M6G74T5",
  "key12": "2G5uv7U7jqgoEAf15mtXEQQXa6NwZTyDTxsKbaCEzS54pEdhfCqwQJhw6hVLua7jeccei8f3JX2yYSSu7qH3wqzR",
  "key13": "2viJzu1TpBxt4bhZMey9wwQSUA6y4ZUt1DhmMV8bHaLLRprBjs1goL9LNQJAmEhgB1g5zSC4ZVyfuiWGz847iLY4",
  "key14": "2mizMnoYRU9uPboMkpkfU5K3NAEhwympFUDSPYmDfvwyMEg1YocLBomU5uzrwKYcVdAcGLMEyBxxRo6WbUSVgvQm",
  "key15": "3gXKQ2GMXrgbg5YVGHs8Y4HtTGm3V3dzzfh7VdzfomFxdtRdfLKdBf11Qxvi4MPGo76qW5MbFhCgQVqfVjePDvh1",
  "key16": "drkRoU6UyC8SbsUMaCM3ApBt4F2873BTYqQtteTGWdbpeonj43c48LdtNVLHHsYc7vzQ4GkipQmEez8Cd1vX9to",
  "key17": "242dfsJKoSoFGogWUuMW9dwZ5KS76vy7Mu6wHA6FdcYHSy5iCEMCB7xhsZUYeZjZ8BR5gC15XT2d2csf3xmsVyzA",
  "key18": "5DZny4gTJp3DxTY3zadcj51k3KXBmAy2cYH4QGohgBuqJTBtKHLvUkkKyx53Hk9HKS4ZoSaHbPd1jFTvuhjiMU6r",
  "key19": "39ibTMPDuJYpUJRoKXG7JRnwkSfDmrXwZJtpaWZXaqbfmAPiB7fLBrywWhMahhgTBNjk26Pc2rL2Sn3pacHtzJe",
  "key20": "4x6eY7qM5ebc85kbVgPo9YEDeo1dsh6TU2qsUs9emVCBKzdA5LUmZXVvWrHXY2Z5V4V2qqAkd99JnXUY2UgucKXY",
  "key21": "2X2gs591D77iEZYriQ6tJf1vNZJobgH9UPpasZB6VebXCfANgYyXxhP5Y4KV87SEkUnRveWQQ5Sg2rrvoj5yfMdX",
  "key22": "35dzXC87fQr18dyid1io9BqrAjzCcTJrY1AJU2Y5VuLZEecdFbdT1vJJs4QxpUbwEc6wo3M7oWg4xUgaYDBxdPrh",
  "key23": "s8gbSyLwaDpCNvEpgS2DfKNsMDb9vbzaF71Cxd9jqMbDVar4GzT7nzeypQ43inxMvDgUyApiF38Ua4K1o8ipp7t",
  "key24": "44rfHNSe5QbsiWLNsAQYKMcwRLrT7gfcj8JeGDaxyRW6cnRYpRQxU7BJHq46ZEU7aCFztvXWw9qfMcZMjpj8xRA3",
  "key25": "4KBbWXkZmeP2b4nz92FXSVhSKWMk7dhsWxoPQfvxfrepU1wAAT4347aRLDU57BVy7dqJjKnsEdV8i5csuRtqVE3w",
  "key26": "2mKereEvhcbawnqdNYDNtyDYcQpCdjsGjn2QwQAB8h2porX2tuntuUNuD9mjvBJtHmJAVbzaXZhSvSCchjw2htby",
  "key27": "5hh2PUWoUWFdTcyJ8a69xUGoxCtQGkzGsxDFUT6CsxiBFvXouugJK2XDyNrvFsjs5xaoYRr6dJ4E9xzQD9q6NZNU",
  "key28": "5pt9GUHKf1D3CTqMoJSkjL9EjxAq7dvch59FDvzRdFRM3RoEnGSmBVwUqkvVDnpEmkbNGDNuqcLVfxC2pxhN6Kru",
  "key29": "3S7SmGQNzacxPrz6BrKzfir566MaKXJSunV7DGuo54eJiWPhtBbWvQFvk2yfXbL9UPFXdipEZ2YDkHhNMytMJybQ"
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
