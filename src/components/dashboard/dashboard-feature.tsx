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
    "2PRGJpJXBAMFQAxF3BHNBFtC29ae93YjdDqvT7KiPXztFkuSJ4hyR3HsKfRNP78VMJ9JsW31gmTRj5LgLMSos8tL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58y36WAcR1NpuWVnttVgNsLtWLsPJt958rnXv1s9EumVjktyUekjLrU5ned1sZoMGFVNcUUdpmyvtNFUjta7XDUR",
  "key1": "4FZ3ksnXVQ7iYPApsYNXPbZ2aYq6JYrUsdQAqMxQ2Y92GWCVZY37MkVnhnBYXh8nV4KnMwMQA7vp1j6Vm5Tdwphn",
  "key2": "VBtggJHP2njJ4S9NCmidWyLyY2HfkbSDwQGXjP63Hu9F25XzFbdpztWzNBgRcyAoTMYxWVTxUJtwrK3odhgKSZD",
  "key3": "7NBhUfvtWL7SHwyjZYhmvAc6BnuojstpWg1rA9xpk7ZJuF3UMyUXqH7Bx5rpFNbJFi6yibxCsmCeJVVvzy3ccac",
  "key4": "4rUTQj63RpaLd73NqfK61ucgE6KrmaNyxbAAofwCzphFebYTqeJxzxhhDK6socwuBTuLJVhdzk67PV5JPDhec93Q",
  "key5": "4TTiS9gz3hRcEj9FqskUxqKMUN5UwbkFM1sNihHnhhpj5TGpEuyjXLQNyE5iFvRhZgq9Rt8VsPDYq6Gmnpjt48VQ",
  "key6": "TDaR8eCScHVxoYHZ8PEspvzkdGNTtauMSqF8rRXuyYaePMTFzerHJTQbwHGUrqSSnSwaGWbRUxhzQ1CZ5GroYyR",
  "key7": "21NrBtuCfaU3c4x4VFKvX5nJX1C8p7xA9UMKy6rGrwkZBKDF9CsjuhpvzV944chi2D8Li32yUMXv6e8PuH2wXurB",
  "key8": "35nawfFFUDhECXUmw6NiVBZbtvgkNz86rddvCoxDTciwo1jW6PAzkDTW6ASeqVb9K1xLc1mRMnoVpJ32k4TPoFY1",
  "key9": "3ZNsG1Xm6rwmu1YVnNAEeta3s3h3iExwWwMpuFD11f1BpUCsQrTcfsDJJnjYn35zjc3H56yX35nYufyLH4ZK7DH7",
  "key10": "5enCDFUn2H42mmfdwN8doJ8nkzVbWKm9HdmKYfTKBA6dVa58G2L6UK3ZUeaXXY6dzjXJqPReQUMrSYf8H65Jjkjt",
  "key11": "5GJCirgRgcZBgem6Eo9q42RvEcwpWDCGNYcAWM9b4WTQNULBuSxUVdpiEhg3xFW13zV8qNJaURNn4fmrGaKDvVzR",
  "key12": "62V7soneQLyJvNbc5QasY3gx9FruC9Qdu8UJcbS1MWYuvoCRM6c3tAo2p8vqYzetFvZdNcjLTNg1wBm5ffXg1YF6",
  "key13": "2NDDMYBXpUNRzGWD3p56UpmLY2FVD9bzgSVxHkGUj7QX1QE5C74DaTEaGVC1nv1cHnVNpJoCVvXHs4X32vVtivrJ",
  "key14": "sqtY4HYwP2ZvKrJn6eums1ooZTuoM6QVk45xn2FAzDt3w9NATE4ydq9i64iQUfXcMcf4vyUBNg5M4YP9xZAnJEL",
  "key15": "44pKjimCg4mav1xPgqu1Ee6HCNW4XF36F5EsjLEaSahLqge6gAYdJqbfVcGsvDedqAehRTdNXdJYrJXGSHeMkGhX",
  "key16": "49qek4RuE2VVs6qVVYCtnC56soGvaKE1zFFiP4JEVa1TgFmsv5urPc91Jib5YggumXWhcPnVvTgJ2rXBHergRzuX",
  "key17": "wdW8LNVJ4AcopwCJd3Yr8sNwzcoGMNd7jtBcbu5Vxpo9MyqJeTbyeP9UvrBmHaptAW75wEgRYeKZeDFEqyuxWh6",
  "key18": "Brf9hMK2YXpqHYRQzYnfuWoMumAHKFChejXjzrN7z4pJTvn8tWhvja8zEgWiFLKB3LxNHyiCM9XxXg91dNZiAyr",
  "key19": "2RekfC1BhBwmHgcjdAJ6sBVXyK9hf9C71kxNfuMe16AMjanLGiYTVgBp1vmS52cvj2tcPhkX8kfTDGmN7bt9s6o5",
  "key20": "5ArbJP3dPt3EarS7fMVZ6exT3sz44adj4Lrxne3Gd94zScqVYoyRuE1XB33zimqJuTr7EsbJEu8gqPME1eK1iubk",
  "key21": "T8DucR7S6Uka2kGfSmUoB2xJ8bzfF3sUS7PAt9z2f9fSQ87bQbRknGyaygz2SrkBXqRrc6d6KhUqzv87U1YejHt",
  "key22": "4SEVWVH96CfGKifpUPGmDDhUfL9D6QCjjjD7qvDnb2AvWHhXuLiaHCss9uWu9X9m4aGhKZEaEHBpUS9Q7jqPJCiL",
  "key23": "3zBrjo7dWtTokmruk7Tt1JrvQS2syQ4qK8ouY1GNxSWxr9VC1Serord88ivLtgKHZowARdxpyRhwjkjezYVA6iAc",
  "key24": "3mXGgxSmS5hWiJS3jEdJYtFbD2mmHHM7pMcL81bzrbS5WRM53TTHbGevpLnWuGBLCyFP9nc3fGj3DmDYr6dpjYnN",
  "key25": "2QcbqxZYeCJW6WCLT8n3Sx6GWhMkDW4rXRk78jnFcn1SJgiAwZisWJU4QP78ifxfTQpiiGD6ZF2oACGgWdKhmKkk",
  "key26": "jGatLKtDDgemxYrHkVFZEbJvfTkMb2q64GAgEuAHybbFnjGjycpigyicKyrs3wJ6GAudrZpSpBz6s5CK8x4VQNh",
  "key27": "HVgPaQjxGr3ZAB484hCSnGfsdH6xB9277d8YjqWwYagDfcdVNu4ssPEpdbgWp9BMunNzthc6bKffhFxfY53atY5",
  "key28": "269AGkUaq7RY5H4JsMSF5awoumL3nhPHMTEaqRoT1x3VXdE1regvqbVBmbpvVJJ5N3UUh96M2vavA8mcfkpGLiDC",
  "key29": "4ZedJ27kvsqyP5pGMHi1BkVz9gjiep2pYM5gpeJPhVjXBc4gZop6kZ581WZM3vRR9dA59cssJrCFSE6KVu3JTHF4",
  "key30": "5zifYbTCNp9Dtb785cVkRBoZgwSriJtcAghwtKGvh5eYiTyZT5q39mvY34KhSTzD9z2gu5PEmFjiSHfPoCUWquqY",
  "key31": "MC17buvknGr2BfETLoGVCmx8GoZ1YEbw7JW48G9Mu8rxyvxr8YF6BEHdTBNpudCLaKeR4mQRdUM7QmfVpCE1Nir",
  "key32": "4bg8b3xLnXkpZFuWKdC6TDscgsosSWgLcxTFiAdfKTcFqRcCy8BxYVsMWRHGW5W9ePb4wmY6LeXa7Zzk9toUQJ93",
  "key33": "2gDP9YdTvCLPt42zi7H2j8SD12AYCYopYvNWRRBCHDwxe9CgHSPnV94CoLvVmK5ddPqZHRnvCM3eMUexBwUp2xp6",
  "key34": "2tbQx46iCxNWLyuQ6RZGoUvb14nX2buPS5BfpDPzJJ4Ds2SGxDF7wEDbw1U7B4ha7ULMfQ7YoCHZt1cpNsJBJnqG",
  "key35": "4PmbyVzES5t6JUxHtzFiPftPnKkh4ob9d7P7SByDDsSteQyvupRPKz5LioGuLmMCzx2z9ahbYBsQ6Mgy8PsyTjXg",
  "key36": "3kjg42QSUk6AdZ6FLe93vdAFoNroApDn3VousbdqP7iF6jJnCtWLTHz7yjaHWhNWNrcz2AyfwH7MjEwZxk7Snoq8",
  "key37": "TZByCgUUfZyyFA1THGa664AMthg9TKqDpPzHAXvWDSJ3Nwg7oDazUDgMLAp9xbZyjyf5tziKYwg4jXhAcMU8ZPJ",
  "key38": "3UbCCpkU8abYeC82T66VVGHUNwdy6raS59eexX4r24SJBAFS5p4GK5fF2zn3XMM88nCXHW3aAB7DWxAs9RWWvywN",
  "key39": "5RsN4kzp8fX9832wseQptTqsAWtYetMTUwX4L1fT7BFJ1oRhDzdDEz8ubgN91LQ17YqKVRV4KZznGreiADuFFbH7",
  "key40": "46EQFuSMt7PDNh1smqbiNaUQcYQN4nHYZR7Z29uDvwyxmJWMz7WGKNtCS7SGUwWMq23PTuGdFueD6DU1hHryJ88t",
  "key41": "5V97ezx8LkXnP7kQ5cafktnW2QxrHGq29VJ6wJFkzMyyWEiGojkBrHaDdXVBguwSFvCse3EhufwyhWmxzCDraHc",
  "key42": "3S7mCter86bAMMqQgVfJd7fJtoQCWPVgpmW8iWWdURRQ4eyr1NsVRgTPz1Qpasy1NU3vFeBpuTRECBUpfyeu4aBm",
  "key43": "weSnhpf6uwDrbfHMoNyfcZjJWvhSRzswijCq3SVUYdiHsifSvj7M8hbMwzmtYddFNJgXCa6XNN5R7rWr1y3H5N7"
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
