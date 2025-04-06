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
    "51C3ua7va5fptKUycQC1knpHyskDxfwZ9Ezcp6TvwC2dxRKJDdSg9uQ4346umSc4hFRddZpn3f6TdSJEyFChLudv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bc5NVfXSGwgoFBgGvCnrbGEAx1A5NKDNio532Bu2grNoTmFAZdzyNkwmLwNWCx5mRkUXZdM3JKfrQ7MX4fvkizo",
  "key1": "FBq71fw1qPt8JN9y71szFevQQXfNG5FWReR243LvyqcPU2soT8PQJFCdVQcsh138Szm9kFmmdUT1FBpNDwJShNo",
  "key2": "25hqZzGkHjd3ftm731Ppd9beRKTR8zD5sG6oftnTJvcWC39sfrkZk2Yp72qHhd39VxRQfJjxa23MAopzo8EiwgtM",
  "key3": "2qDq3tJYXnsQvNMP8prRwGKJjpJQJX1jWjaxVYyj8iKSCJXdYrWJTyZgkgPsN9pKkt5icsqa3jSc4Xw53UoGRceS",
  "key4": "36ujRr5VDyWR87aSVnnSs1VPSE9CpTXFZZDjn1Pc5FioFt8gmZy2TwJH61spF74ipeXrmEeCivsKwuaL393VZ7vi",
  "key5": "rEzxzy4uo2Jne2aueQG2zcV5MCocM6DLvZFRXN6rHQSDU6dvoxF6MFhNxSoUDmfiirCnYFKmnASGNpeM43E7SuJ",
  "key6": "5V1wfEEsMyzc4XFy3Ndxa5Vhutu6RABdCV75yNA5CjzpWzPhEzi5mX3oEivpMzGoVMyCwEw37QkdwNxzmGfzVs6V",
  "key7": "377tidKd1K3wHHcQoudPzR9uj72qTXJCF3dVx5zWSFP9GuqGH2gnFy5GifKrau57RjnFfuZJ5CRvyP247M8c4hqx",
  "key8": "5bk69Ux1eiZNt3rSEskeqbG2zPCjckKPJuFAVCAvLLwxYgCEgMm3tngQiBTMYkUHrZa7HU6V1vUd2QmjEVPgsoQY",
  "key9": "4xnALuFSRjguRvuPpu39pykKLK952G7TbTbXQQrPLYVdbPpcETPPxZTct93eexTgRb48HNUh5MzV4EsyRvSnyW6U",
  "key10": "5VDtGtULGZ9vuiVz57GHV5eMqpoEegLqAc7XJCKRPZ46AAxC2Ao4KZV44r5oFjTWKkGVB39jGxWcHGUYPA5Ri9oZ",
  "key11": "3HRELxiGSpnhrcy2P4RTVGr1XkWtQbJFcDzTytn8b4UDZ9CsrFpfc25R9wDC9KiGtaX2PNErToEaVjTTX9hfUndf",
  "key12": "28DREtjFi9TWNKEhw1MtJXYtzn4gdUVk9orh9BbbBMvuBUuH9jneytrLnFxknCFQL7gMWTZhdkjaRvTF6U4KcW3B",
  "key13": "429yt9m9qzxrG11NAwrp5GRWLtdgLuuVuCzAYU5eNtWez56ESUyNfWjzXaVqbKaTxPXAe2HiYyKN1qnifS34i99C",
  "key14": "4DFhMDoNpyPftAadSL8P6vsdTu887ar7Jjz5YPgCXym3wCKAj3gFZKNM4yFnrv7WVeQR5A8vLpvVWP5eZZTQyRqx",
  "key15": "64W4MkDg7zNknDxAEMgvrN54K48zzAgpL7F7VGDBXjdibqumTkuCqQR4iesBReVyLFbC8jyJFXbGbjHtZMeXUvra",
  "key16": "65MqjbXgakymLMkaPqacM4EsNh23EoATEVuvGsKNETcT1AcBq8oPn1Zb5iKFXjNGuWEgpy37GGuMo9KbjN6w3zsn",
  "key17": "EpwYScfoSS5JNyq6nAtSy2Paz5bvZEbN4eGCh3GuGGhQbZRbE2QD7pPTQpVM4wuA43EmfxDimR2dmGFZVA1LDRF",
  "key18": "f2wcM8oFZfLJDZn43jTkJR9fqeuJqkgX8V8YUAb2s41sVfXrJq2NRTHsvGjgnwhxBXCXZgHH9j9Kcw99fom8xFF",
  "key19": "4R4UuakDfNBRUe6aWq29itxSKPfF8GHZfg9nhKDWNDw4o7kYERbR2dSqZKC3YghBCDWVG6xCpUvDJnHm7TFzTdPN",
  "key20": "3FKwmv6xiY5vA1o4rrcS5r6Xpv9YDr1NJo4QpxGBe9amhsFYKRhD8ZnYJ49SY2mQqjFVhmaxwPgRKFRAeB76Eobq",
  "key21": "2J6iEcjsou2izvc33mkMo6DsVQwg9Hc5zyjhFryfrQ2k5g7S33txKrzLhHwLuhD3aZjBvwk22bqKvXEdgES9eSij",
  "key22": "59SWeg3YghdQYuL5gYJZaWCkrttpkWAJNLEp714L1Mg4TLJzBhu8ZS3oqHAn23hbbE51vM2d79KdM2V9jLNddokz",
  "key23": "2LW7PmA2d4FDsfFkkUem6g4jC8upLV6SmJ4XGuhSiaEazcUGYdnTCkV9J1wX91RHNstV5xRBiR5hik3JX8R15x1V",
  "key24": "4ccD1m4r6QpFSBB1BawfeVYGoHx6dwQ82dn1GP3myi7rqWPAnouzoLzEET3zELqPZPZ22VNoEmNBgRDs52pFBUPH",
  "key25": "2NHs4kpQpHm7NtHT3Aj7HmKPh26n2WnDjW71aQNaouyRSzhKx2AebhhmYzzLiNxGDH5LxvPTtkdC4H8hLwBHVJbW",
  "key26": "WBMLvC13o51RxcN6JJSKygo1cxTs3qRGMz5kuDKV3nu2ntT5eVRkRGczVrD7JimZTwtPoGFWHe3usfCa2yt1654",
  "key27": "3AZjLDb1MyKxckDM2JoSrDK3gfJjYxyKSTWb4XZ19BSncMyxVPJ1MoAFpMKSca4D2KniNRiokvFPwrWwR1U5hmM2",
  "key28": "5UzcNgKkPAezmhmGgboioVq3kvyfZGi5rv1Bgif3ZFMvTaNHjSkL2zSbyksYYDW2eLbpKnJFGC9Y2UC4ACZwr6jJ",
  "key29": "2sryM414FFtWPuSXrssvqc2wTygtfBLJeJhuNVMMqQWSFf3JSf154a3zFdSBhcAZPzZ4mFbZaEDucDmLu8LExCmz",
  "key30": "28zy8hcn6P4V7MsNhdYhXNxeR6QrGaZpGMdgBbeLysubZ2zbwmKmXG4X5Jmy3NvnG9ZP1YjV8Bimdd7B3PNXV1FJ"
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
