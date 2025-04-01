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
    "3ToSEYvNQGX2UTvwSwojD1TjaGeK9Hj5hKZLusVZHjB4xnUdEi3ABm9BWEcGTVoq7bCMHAjgPQ3PBAqDox2PaG9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BZ5Cic5mfJ4JP2LbBdPvNy9dE4UDxpzYBy3zzzwfLPvt2hQWowhh7YzyukZUhBNivnpRCfhKUXayzV2cZsoyTY7",
  "key1": "3MC4gJeU6aX94f9JmNnfRTBWJi42qVFiyg9tqm6D5ziRVcnRsYGWqbA4v1eX9Lj2tDodf2oHBGB6TuQBGiF4ExVY",
  "key2": "2utSAPT9uo843MnVjVqGXszS97jjMuDN8KeNKEoEZ9PzhvF5USvRoXxHcGq6CLK9yqUj3ESyScrHVydWyHpEF1S2",
  "key3": "3QXJCuG83hAvqnpZRy48byML25Mrn9kSK83NmwNxrT1LDKSEucWvLbTjE1MJahJZnmwrUz3T63skcBwyBGDz1381",
  "key4": "44cbD8RyZ5boCvCygeTCRxVR8eseoW4koAiHofratXMAtbAnhcJFJnC6bCB3doMhTqKucRSjhu1RNQAnt6MmNQBt",
  "key5": "124E9Eib966yUnhizCoaHQ9XaLp2YSHkiPi3bA2iaQARpVkp4dA4VPud9UbgNXpT6n4GBupTBvnJMZEFHd1Ess3f",
  "key6": "2KMqyYZkdnJN3cK5JMqUoJSFKLcWK5NHSjfL1VmbcxyQ1kFAGewZFpGjtAWPvPzExFt1ABzTNAqB2e2RBNJh8sNF",
  "key7": "KGv8iq3nXc8PKmCT416FvqrDs8bx5BNut44NNBU3UUV4677yyRjfPndTmHUYaj4xf6dmmuT4KnSn8HFTEdip4yN",
  "key8": "xaxrU5ywmyHhSVp7z9DPvP1fm6KqyFYnga54JpyiMRBfjxXqwiR5vJ3DuikPtLC7UQBESKMr7EeDSmmaJZDrvJG",
  "key9": "5VDpKLe1ZwrbpMsirb8CzWAjDFYf9ZjuFWKtqwk5hm3dGD24MMcgbXdguaurhxQcTsfpuB6ZpyphWRL9qXB32aaj",
  "key10": "2eA1pdiuU1Ymnwsrty2NG6gigYRFpMy5u2EPhWYAp8eb55gsqqXrotZR9eTVUHCC5e3Xq6gXxKZtnfZ3WxyGuTqb",
  "key11": "5iqa11dvP6z25eiYzCp9kRJvm94U4kBwbRGwDRGuZk6789x8HPk4se7s6M8kWsSjuo9AUEjZ8X3vjkuwAYoSEDYp",
  "key12": "613ZFQwnv35zX2Gg2ZjoRTu3aHDJL9ncirKBcN1qrbQiDfYVjf2ZccL4ic7iHmDTsKFFLoPnqgD41pfjG9zGAgpy",
  "key13": "5fvrfsdqv8uQCzV9XR2nzSFQi2ZkJVD4vxRoLQxGA7PQX126rcN2WqVR4N4Vsc8PRkxiSe1nBjmdpF8SAtM7qtVM",
  "key14": "5VQ18dsDmgR53ArvZYcfRwJsTR1RdatNyESBBHRc7fJz9kaYtskSourknC1LTZCZNUrVN8BttRce5qi8v8fTKpdv",
  "key15": "4iNokBSmoaFUK8EHTWh1L62TCqsWfr5FDCLyX2di8ySpahFHGi7f95V85HA8zU7TvXtDRErTeevG86TUamFpVKsf",
  "key16": "2kcRiQ1tyx3cfM7z9NWjiuthMkFaTRsWSXq7jLwQVfN9FAiimDgKkBoa2P4a7FwXXQRn9Vmert597QLa3pRAXs5S",
  "key17": "5ScKiVZd8WK5RRrAKuVMFUYsApnZR9bb9GrNWtKmSubVrCj6tgguZw1PxHMuspW6c3Bvc9szxSofWPMshewHV4he",
  "key18": "3YEAmPddCVvdPMaeGE6bpP2G4APtufLmaTgPbgWEBq8gnicU1wXJKS82uoMwaw6vJSFhyqp2up3DEYG6mLrT84PN",
  "key19": "2zuZCFzui5yGDeDMjwn8JCQhJo7Q4d68EhFVPupBP1fwRkFXRSgQe3jUHvi2ZCCWACG5gZNxR47pEZPTf6o5TCvp",
  "key20": "4hh2ha9Mv2LNHw96oojsctAKZkdFN9oRAXkW5XWsyhCt7BktHQmCZfsXG5JaCXVFGgTBGQ1npZTt63DcomPcoQPw",
  "key21": "13Z1pHiuQfFfM4wyVSnd5dSnpgGmRAB4ZzyqtNEReFDPvRHejbT2iVTFyvNX15BbZRWxycVi88ZQxubgQFwUbWZ",
  "key22": "2jniLMq8EqU3PMxHLQFWzvk8tTJMF4LwQUHtqWcAruXP98AvAxXMbFnCETQAjYR4K2EvJmxgaPMvwVVmX1YY5AvU",
  "key23": "XAopacHDjsbv1vhGw5RVd1j2fdGXSvfXWTPssRNuEXwhPfCF2mAGQ8AsJ1T8s2DV1WXMVe5mX9yuEQhkCutMqPm",
  "key24": "4jfQnU4w49x1hzMEwcqV9MA9hcgsZrWdrxc8tDKF5h9hnitzWQeHHSqDSxSCWsjSsw5cfxqbRWDDekuxYdESzufP",
  "key25": "3bdKvMnepvYqLSYjqASgtSRVw5GcjyFYzFmPUTb29FhHKrmzkGHdiZVf9yBjsWBwg5bDFyhhmEj9dGJu1DixZtDY",
  "key26": "3t7dw16gVsSGGinTcwpXBZ4QQ1LYy7gRHZLgoHqTqPvF5ic3amV2hLqwMbwJt62MPmtXQip9rTfnCUfpuqBfBYjt",
  "key27": "5KjkHbp9soQVhZy2gZ1fgfrStSvhrLG4245UCN7DNoj5YLvb4AEGXMrpfLP5nJmbkkDYdxbA8D9oxKrodADgR5Uq",
  "key28": "5mHaTgAq8vzzx1KNGmaF25f5KvPaKwAk1JYBroEWQA17Mso1H24d4xiJaViTdWY28KbcsYRQzYWodS1HR9CCFXXk",
  "key29": "t2BmM3HzJaefaThTVPFDCfH5wVHz3Mi3G59LprVnTVHrcVVEafiQ6rTBXoiprMM2knZEqWnrdXu8LYGbPC8cC2B",
  "key30": "5i3KxPoLXC5vtf6r9REfDYYeWPoByoAenWoGdtP1pKuqm4DbkTGnBfrpfFeH8GdAqQjf1oDauijMgqRBnJqvQQQQ"
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
