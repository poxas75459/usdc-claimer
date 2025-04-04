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
    "4iRuEgrR9YdhMEQR9Mpy9kj1kF1hKfDNvhtjnwZdjSmA1vxEjR4LXBzF9DV5NMaoSJkUvFwqN85SdhdXK4b5xee9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WSHAqRoMPgXSRFYiuJu9vnFLiGV1qsbByi3VLnKTSqHqLWTMRnz3ApLBRiEZhCUuU7SV4NjY9Dideo2gmikXgPe",
  "key1": "29kHX7PFyyFs6M5DUfCvcW7JfrtFpxp5XW8QhYVyq6zvH18TSYKfEgbKMHLNtP9unErQ21CKU62iyR2U6uvYvV39",
  "key2": "fj5hHs6z1GNLcKSstSZFxhLzUmqkC5xS9YXPtxAdZEHSDy52cqVu6zEktaw4JwKgtRvSTdJhAk4aJ8tPAKpnG95",
  "key3": "cSJCxGwJXVYjTjf1kBC2oN7Vnm466Y16KN83Ypd2EWTj193ZVSogkdgoAKU7HX8bxHEWjf8GNN3KNffBytE5m28",
  "key4": "5y8oSbH1PXp4B77ZAdthL3ojPTvuGWmUFa9anuLFa2ZARQd1F8QxW8xSiEhcEauUPVTLySrmym4JroyRomgndBCy",
  "key5": "5M3ReYay89PnDfuLgY19fKUKzd6vomiNpaE48wy8kVfH6TGVej1vexYGjNSbLVBBcKMiMyvCZ9w7PDZ57NC4aoGR",
  "key6": "549QWeQUz8dYcBWcDT7jesSugQ5NPikcS6bXdx2Td7AJECoWkCjz6TopRauNi6APCtisjW2KzBCHFoA6NGZy5qeM",
  "key7": "2ibnVHLXf7pnnYwVtpx1BQFNXU7gpWqYExetDJLfC18n5xzT7mmmnCvraALVHUAq3auSGMr7Y3zLrDT479MkChmy",
  "key8": "2YYg3q9KWw6o6uqWb3Z1RwkQrEksq9PRei4WCFgmWUA3RT5iNbgkdWyo4ZLGmhDGGhRRY5QXkiBM2rTkVxRr9ub",
  "key9": "22m15ardPyZ6Gb9oX6iEe1GfcaYSAPHh3myvQSjUsu5YybZRNVsRZ95Cz2CYtxhEY9Sa2CSa1CfrrsL7pZA8pxEh",
  "key10": "4P7QbUqqzQGJfcRNVKWaA1JQ32trMySMbEGjis4BeWepZy9eB83FGJECA1NmpwW6M9PMqeYXpBWcdDttgQcUEHJo",
  "key11": "4i35ZTHXGVyYdgBfA41Zx4omtjJY98dHFUD2ph3554kQyjfAEV3ZtyawF9hfpzFceD75HQ8xpoGXWpPCS1ScnWGG",
  "key12": "2L8X2bWyedBxofNuvagz7CYQ5nV79vSdV5hPhuh611m8dndtQECUMqitzZUCTF8XuAeKNwQRT4C6CRf2t3tDYEAL",
  "key13": "CzBvh94TGGm8qYEn7nUNrpBM4rtuvM2RcYp7aBLFBpa7eVGQZyypBHQ9BYfHiUaFijK5ic1ufpESRRdC4RvobXZ",
  "key14": "X19vWxvtELwYVZvBd91HrYx5fDUxbYA9MgJCFHXgoxDDveUSZRWKPs9KNWjutiKo1UmvbfrUfghEZpf2YJnJKMk",
  "key15": "JSJ9Qn7PFoKXtyuufMxL4vpvFoDkZ5YKtgrGoFtvKbu2BFPMYmHCfPzWtPm1SPvtr7cjzJRzCr1fGXP8iUgxzjk",
  "key16": "2ARMMz6ExVpSfHESaskhk4nJLp72mo57JP3EUfdaA9WdhUTMdw5GEof2eTnpL1HA1nWSshojrvxW9bQ8KSVC41UH",
  "key17": "2S8aw7QR9EGokVPuYe2LgVZoJXNMHhQdXHtdkpZm9tFNCjf8LoEnkU8mDQtn6Qh2DQx6rhxvp4DH42oKnMNXSW5J",
  "key18": "2iXwP3Rtt4iwvZ9XCPqPpunKRFZj4c5bbfUmMMn6YjSVBfBLKVoTHXUPrK5c42DA7Zc2VfbwmEJ7eqz741CHuvLk",
  "key19": "5wana2UxqFZhSbXkPSVsw5QCNTh2eJB5hDqzFtLygfToJUsHhjubFZoGfcXuZE6efWGJn3NafbXhdk2Kt76XoAwH",
  "key20": "5jvdJHTbRS5yh8kde984PX3Zj6E9QAE938qnx4uNT1fTXJRrRLs9gmXCvzrsYyoqe6wuN49q5mnyyjXiJ1dsgf1S",
  "key21": "aBTzEDMRki1qYBUGnLR7Rn1razECBtAZyeLGZhrnqr9LN47JG51YSThnmh4Y1uqKEdJCncKEYvXdcLHW7Ya9w7V",
  "key22": "4svsLyY6CUZsiHGg8zbpCFN6Zfkdi4fdZYQcn81h1SmuDhWBWHFLQr2JQNWQnVLAtnoSRSgBtSMcoBf2FwYr6C4t",
  "key23": "4eWcRZnc37SjVDJNvjWuNBNSGgYPGuCjs4LVWfVJXDzwouWS9JV8sYwjbZ3BFNJPkUrqdhWkPMDPDGtfoT1qhGCJ",
  "key24": "5PHYZbZsec98dVh3zDdLidr33HDB1LvsBP91AyC8LYeM2xEvRhPtw6JJrGPW34uz5WCE6erYTtQixz67PmoxbuFM",
  "key25": "67mz8ZvqHCLkiikJw1ZXgqfssL87NMbfqvLG18rCxSZCQZ7dt2shxbYUVRyZyQ4cfRWdmfVr2uBqQTybLTdsdeCw",
  "key26": "5YGmgCdcrvyqUoio2qvFYqot2Pg4pwnMMNeseXtzJUbmg8GdkPBEQf3JVSpN3ne9tu4WGCzg5PtU9oeRkX3G81C8",
  "key27": "3YQk71obvNUXySNzE8BaRdcgWz3LRsjoipcgx38qBPeaiGc4x1qjpKNU6DkJ1xgu2sMCSJVh739eso79e96yuR2z",
  "key28": "21C1WCsVPKh5PTYBDXnyefh8uBQ18MjEzMyGExoKaZ4PQ7EM8vw595rHwiMCAS33XgehwhQGd5PT6344Lf7cL2Pu",
  "key29": "3Vqv9LRmPKrskwSB2r4yZMdRptXf2wj2JBJBvT9FYGzNEvbngS6jgLQXeoTMZNYhS9rGcjjDrK6pRVoebQ7xnBTd",
  "key30": "2EWrBbSv59K3gM27Ry5fLegHVbZugtckpj6XuDGutxdR38eaVJE5tjdnDWsCMShHG85ghZ4p8N5XiYr4DeRJdtCv",
  "key31": "833PHq2CyRdSeESWbhRMWSUc8sVTgbAFCCnK7mKHCuRKjdq9trYP4qRQ581qHWCLTetpTcGVosr1ftB424geqLB",
  "key32": "AdKp4SnRFPn5PdJCAHMQWMySoCnPm5V7mhDnJHtdrGuYao1xX7Sm5e3duY8TFLaUpwvgAZYDCvZCPGJ53SKWrrF"
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
