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
    "2DANwVreY7yZYc2BojipKXYdyqVJh229GtDpTjAaxDZeuYR2GdtPy5GbMfBx1ekk5f8nTJYNCZecU2QH4QrpvyX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N7VknXoX3vZ3civmooN8tFkZXmJ2Hn68TMRjafhBNuxP59vGKapfBpEUQZptHvW3DQNUkbBzstmri6PP5TpudH1",
  "key1": "31HVrRZxa3uRMqtaPqRpTBaZNBpwML7eG6nh5tZ2tobzb9MU3Nf9yxxbKYhnWc22xrwaiLxh48KoVM1U3afoh688",
  "key2": "5ujRwtg51RYoLR3izySrDcinFjERqcoNX11aaGCHANScQ8w7MgXxA5DCewZifPXt9hMqFuW6EKxNLmkCB48SeYsi",
  "key3": "4yQ93oGREa7TyTX63XFbvQnT6Q79nGZehRFjtRXFitxHXjTGT2PzstYbHXP1tJBfbShXAViKxy26LNU5YV6xTxkS",
  "key4": "j4z9oYvv3CvHpX2D1p1wdzZShX5fuCxJ57caR6gyPUXJkE7yw5xppTiXH8eZ4sAxCNQBFzfxqjimNANHNGCitup",
  "key5": "3faVZS3z6GyoaaAL8Zd1BBtjKJNZwMtFxSzJUDm8ghxs1EtKYk2twK2ibzHByyanjGh4Gb5CbL5BDmXMsXJ87LM3",
  "key6": "23mP4VNsNmPgfuTw3sz2eFAzC4SnSJLGXsmScYCZAthALwxPASAQA2LDeAkv6rEqKX5KygrGtusfhU9WoqUL9eyv",
  "key7": "5zqaxBczgdmLDKnwYFkAF5D9S61drRJZutQkUq9zjSWrNJ57boHKEbLN8g2ZfmcgB86YCtM36wmWZYe2gqyw3dCG",
  "key8": "3K6JQy4uc1z4xxkKjvn7ymmgNFwbHixFUu24zTDNEi9vxmHEjFhzVTbA4Mow3inpyRqX4GKJyT4p7cp6PBD53zSQ",
  "key9": "3sJannHQkCxk5NxafWxWs5CXLLc4ygfNCnjsRWtrHGJQuM7nMgSHHc4G43gEod2K39fQYRG1meuwtdW9a1qgTQ7Z",
  "key10": "4htnvVwFsAmanrVxPT6XtSsprPnNnoHzHvo8QSmn3Uaj3oRcEnPS7Ksyrbv5JR79Vrq47oXvM2jj3TmzWiFhp2g8",
  "key11": "25kyqKMaj6xpjh5YKpoVgcxMFVkgnrfV7eSa5XLvAkQ1gM3HSvSy2LFxfjnixVd1VNbvFkLUHRu55ggYZAcg4nrV",
  "key12": "59rXVAJuSK1iHq1zqwdWVQnEP2xeYLaRByfy8QDTtrYtoi4v3meQZ2wgqRBBWJswHZwVi7HfdcPaajKU4TXHy6Po",
  "key13": "4AzaahDVu61gRczPUVa7r9hFHTZvRfejXbXjENRZUHL9GXkcickkCRQmUH179js9B6V3bxGk8JgyfN4xscAWJVu4",
  "key14": "4uuafMSBoAYLZm8jAvwLcfPBGzHFhNQXzmP51LA4sVrA5fuLiNVmPCZF2s8okLn8971RLYLp2VHVURzEBDGSzn4B",
  "key15": "3ZTe5eTE4XTscrYv3D5ahoyja59ZtCGTkNKpuGJhtDzrTdipKtAG2mkGt4SdHWx4NaZKgCTCZNxRdituA2bnY69C",
  "key16": "2irRxLymjw4hGevTWJHJeLbD3DCETMB7Y4gFa6odNktBnhM5HrwU7AZMUPaezmwSaxJnLjrwBfH5WfXsRaTU13CP",
  "key17": "32tNQ6Qj1h2Uw4e2DcWM7abh42GQ69RVqSDk2GiSpB8FLdCEF27Xksc4v8G1KgYLgqzvLPDksfGu6aKEgGYMTdzm",
  "key18": "2mCrepXqhDYVQcoVpktFj59B8ipBzPVP6UpqXptq7jrTsmKpEkFKnuPA4mzVSRfUvEknQzM4bFmbSXTnAqrwGVZc",
  "key19": "5zgfysiH6nMFw5M72XSYtobAS5fPq2wDZXizX9g64J2EMeGsCqrMSbmbp9ri9EnJGiBp4C8UD4etqwxFF4vDJbZU",
  "key20": "2q1eafG1Nt9RfScWn1upyFg3ZXYHUsmzXq3SnsFGbsPAY4vqpv7WZLrBmPhAR5qUaTdR8UBWrk88xrTvpkWkvTra",
  "key21": "4abiHZEiZJbMKnANtvUo7EyyxGqz1AwiYy459S9pegK8mi4wNDcvWx9XYjmDhfDqcpyTyTESaNzR1n4nWZJg4xc7",
  "key22": "2AD3mgzntcGkRnBQUYPGzLki9qKkQiawYRTPi1uHVfRFuGLjmxLBBhk3V4geJ7SE8WhKTcaiyy1co2mV6rfNz6Gi",
  "key23": "3TMQDEHWxQVgSmUTE68ptZWP9TGybfJ2LUdEkprbN54EiopT7dgsGT1tU958NDoSV6RvMBe9t2YeHFZF36etaPZt",
  "key24": "4rvGFUij9GPSsfQASzYyCcutrd3aZWC5LWMaLsYyNgGnHwZQpBM3P8gtYHf8KhQyTwYxcqPEEvH83APBC9L1gWXH"
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
