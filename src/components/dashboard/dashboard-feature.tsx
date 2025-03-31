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
    "5LGE9TxgonHmhVD9MvKk9VNEdGwJuLAFjf2dG1wejHyYYs9MafBPcpv8Bq2KNadFaMKXsVMA2q8QvvKf8XBdGRnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tiy2WvDeUvHG8DkrKUyvH1GEadFUurDqTo3ncepTUvyuJEdQR4pbUhsR34Xx9HoTwc24ZXTbeyYEJ25htASwTLQ",
  "key1": "3M5CtqRNWasyyvrvNudW5DrqGiNqvVxdum5ZH6qXEBwGHmfyWTUrXkWDDFe8gxTLdGcqzhEPAcQCkvM4dwXqrGRT",
  "key2": "4BH9RfNaPXyVvNJd2TMnxu4PEWdTmmhXzhL5z1HiBDMRMYYJrpMLdyK2jrVcMhxFSEwt55wFajUa8nhVLUnk5KQA",
  "key3": "SJ7CJaU4BLW4UJbq2jF7VF4un9BUaCtfMDMfzmMzKizHJkPGZPZeZeA5qMFmbhr4FEa9LF3Swc45jwyWZpTautY",
  "key4": "vt3JrQZv1c3keMuzNcNXSacFC8WVkAL8qgQTu1QvuYiyHpH7RTGavCYQ558JYZtEFfHDrq5RhsVBF68SqDUZxBZ",
  "key5": "4HfRa5P6SDe4YRYGKf1wvQsU3NvadfPCvBV33qBn8Wjg31Yequ6XzbNPJrNEicoAGMgfXM37y8bRuSpojgoZS9pN",
  "key6": "2ZUj3KdHHTQJZGCQWmZEXD689UXJSnpqPhohMp2iei4Uy5RZQSNMoxWw29WH2GxiKwDD6X3JfoNPj8dmrfXPzqMb",
  "key7": "4Ps9PJVxXK8TWBHReUVhX32KAknopCsNEJzMLqCwzmFhFMWEQmksiYuH3JSG55iacFnNmdWHGnBW84Q9vhzwYeWJ",
  "key8": "4GUZFibWu5z635GtJma1vdSsScErfRKnQLXgiSvniprtM7wjCN2xvFL1eXZWMCroTnrcoe5zn4qLzjuHsbevo8RL",
  "key9": "4TLTPquPtgBpDsMwsqmwG2hx2D3S16deWohS5yc7RW3k9CGnSKDTySKVECkHiaK5U62v6pKNhJB2ciVRoMJFU96N",
  "key10": "5hyBZKUJnj99djypRqmSzSWi7n3kLdLZR1zHsiVeSyWvh4aNA8xesVGHFEBbxsm4n2feUbkTfyFbJbdaD6m4kQR4",
  "key11": "4UrwbLuxztqWpJ6LwQgn5JsKwKdCLWGnNuL8f5ToECV8kJZpL899oDet8FTLgLwDnj5Rzj61vQZFEheFpx5La4t6",
  "key12": "4L3ezno2FjAtuJ6WTG8sniirL9iyU95NqmcehB47yr2oHLk9gtyT4Bj4ifa61o6qEMKRCuRyc4NfPbBmHYCsY97C",
  "key13": "9uzXkwP2ZhFJ6QDHcH8j1YpTry4Xb1Nq8R5WK2qf1hA4gT1faueWKh76WgfzNCcNt82pSmr7rCUNC8evaBfHeas",
  "key14": "4Z27zvdEuJFyjQfR6YHvkYutcY8eA81DuEyxGwccapveky5tzR5zf1ZJW1HHvw4c8oKZ8Zc7u1GMCGXRPW75z5qZ",
  "key15": "2jJfPBXSGE3dRNBT6ABprwqQyPdjF5HMmCQfFMUKwFztx2zCa17VcxJeqsEqnTEBob4JNMPHEZU4cUegkFwrXmQN",
  "key16": "5oAobu3zV2Ep2VSmJAVDxRjnBEy8nEtT4kVMLi9XTN4V4nfZh8ggQVZVucJ9SZm1KjigsU77zeVWk68WidbFm3zp",
  "key17": "3RqV379RV2KygryWZ7w47RJP954d7vTKqqSbCgneybqortBchLEjBaz7fKqxbBs4iUNt8b2PmVGCLeZr8bLBGyUf",
  "key18": "5fQBZzPiGY95pbxptUx1XJc6D4Va6o3QJYAZWb1mrP8GVa1fwQ5eAFnquNKRnwWKDpNDTH7N56TUrrEk3vw6BcFa",
  "key19": "4kA5rrPV4cYYmgaso6pDnkBeBDnP3Z5GDDh1DxEfR87H2us4ZHMDT7MS14sQmYoeoJBZBELfsAWsH72qGyZT89jC",
  "key20": "mvzYgQ2wM7HmTpgkkQyNM83HY5b17yvnYk1zBibFzoPi7SqLJV26Ww4XhAAVfwy9DskKNVvKTpPuzmr9kFZ6cyz",
  "key21": "234F8rTGiBGdwcPwWrr3h2WB4aGdXWVwipvmztMZNDDAfeAxbJ7JW3HfHKcPq6jU9qhjMcGmA58Eu224zbQdgLCR",
  "key22": "2mo8ciqBEML3axfnHw8g8WnmMaL84yW1HfLuBoR49CwixuAk6GrvZoWjNLDGog4XLDavKmqwC7oDzBmQJtMEG8gN",
  "key23": "4GF7EAvuCLLq9oeL9ebQHk9QRyMG5pMFH61mMKYDFgWW3PM59uRYPCiVi1J1LfzEJBU2gCiyVrhcPWRemmQ5Kpdc",
  "key24": "5K59nAb1NbxiwdjxujF7AMezDoDjhbmb7Uo9tEekxzpTN1zvw5w6qMEUEkuek9nr9FB412Adi6DVgEL3wTG6LuAM",
  "key25": "4ieDoHsFgnNTrDs8hupTirTPhvjMKxpq2hy2kgQTTztsg1iLNKSWsqGzwqu7Hfrb8bHY1kWnV3EPZCsVvcTkLruQ",
  "key26": "hVSw8iCT9Gn8VGwGEe9C6e3cAx2FG9Euzti9sUNADXXC9qnRgFGtbeUab2XX6NjzpkahYJgvnsHsdd2VKKakime",
  "key27": "P1BQHwsCqjoHrae9t1Z56tcZEveuo4wXY6EDPHYWhuPpi6MYQsPMr3x9Zq3RXdNrPdyArtKaTsVrsuEn5GgyhDd",
  "key28": "3QTar4PuRfad8qebnPUNNmrad3SDtb2n61DkjZYeihhmKG83QUcYa8PQvkCLEenU9mKRvddqFmsJmP2dGKp5yGSa",
  "key29": "62kpQCp3MNaQq8FisaapaSnCXhMGhxGB1SPxyTN1ApwsY8qUaxkHQbKgZRG3rEXGjUysAvp9pd7DqdgsMeyR5CFJ",
  "key30": "2qAKTijmB9ZLk9GA3cj65WhRJUJ6X4jtLztZVoCGaZdJt3RDyuvYdWAaof7WPpsig79xvrfhudkPKoQrZvTom7xL",
  "key31": "3Xf95igeBGbonSer9uDhg9BTWvc8ibvV8Uw87iHAryjLXXPcuC6xJPVoX1nCZQUEioybQrpDXqu7t4SNUxEZHtMD",
  "key32": "3yzP8SRsEYRJYK56SFfWaD6emFDusx2zAUFFKG43X8sTS5hxW3ZdGVDhJQosENXnmp8VccQwRxeDfPkVVmdUymBY",
  "key33": "4XB3e3vhXobvGkxCAoJ3S2ACbbLnSSbke1z6mDRMuEedzmtH5dNEvcbymksG4pGpvBHnATVFVFTENDuisveDdc5c",
  "key34": "xMV2577JnPb6mBgwpS7NZtM6borKZvervCbKS5hwe78TQrAYHF338x3ZYoTAmY6exYNwGTyK3ZEX9SN44Aw4HrW",
  "key35": "4hsdg9BgkyVchuJJXaacpTEJPSL6Lvs4UG2ktw8Qv17ATGWiHY2uhbnXbFkhKf5S7pD3Z4whT7aVFjSNWLdjDyaw",
  "key36": "3Sf7MbaU11NSuhKsBpD2vj62ci8kwDatNxioUnkZeZMJAetQDaLfPZSjWagdRsL6dq7Wws6Ln1UCaoPE72qYnSUP",
  "key37": "mmiWWv2MXB57Rg1A6zNpeX1upun5Y9NimuLLPwBArtzSzx9Rbi8yZLr9PG9bVcnP3kJPH4HjGNcGzUftXx3c3sq",
  "key38": "d9s6nfMKgZdfR86CbAWkX5bfKhEE38DJkGD5zYZrfPenrD6TcWUH2jGDMCWRbxs8GvcguckQhaSGiDzP5BiJWZ3",
  "key39": "VaWzy3cjqJwxAeALmMXMHpNyo9FFKDfsix8ZxaizYDTFStRHVLP3ZeCdKCr88TUmiSPHeVYeemTBymQ25SHdtFP",
  "key40": "39T4gSssCi9gD6DRQCqk2bUqhv3jp2oLp9GrHXpusZKqM6GL2nwfi8m6vhNXekwM8DAo5AYA9ihWovPGpkJnrPoE",
  "key41": "3jfbNN4ycjfMnYCG2qppJQRrWf7DLdZvpT49S6Y5BorB2yRFfZLEmqc6ePjNyJsL78B4qCksW5nb4fHYVcmYz7BX",
  "key42": "4hErvg1XfyDvvmJ8uyNg1wvE1S7i5w7AUPmdvE3pgntnemqFWHcN69uEcDr6rpHycYvC2yCeUqw3LLEcaQnnMRQf",
  "key43": "Cy58BeQLmHtPMa3XfnAam9rivTJGY6R6msDw3oka61RcSWFdprS5EoKZx9tm1q16wZdjHnF3btrox73ZimRFgEF",
  "key44": "2ihBHtoneAJzECtMp174ptCSdasR416uG1W4s8NVTv5GE615ugKhU2SdkvGB7qX6HtReLbQCkM4FSdW2HPYdhPq4",
  "key45": "8v6iE4ce6YpXa1aQ5sXY5ktATU9FmfiQLRMfa1Xt28HJHFNKdmyTrL9egpzYn27VCkKiH7gNoceDE2Afq9F3vTk"
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
