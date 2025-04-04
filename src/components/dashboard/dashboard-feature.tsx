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
    "5kBZ1p8nKYjmog3jZPrKDQBrKaEX1i2aJh4ToNANRUrkDg1CjBDBUPW8wdGD8yM9ytDP74gorbaR9VotoU9YbtBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Ha9hqy8WwftgjtLqi5GJmM7goAvPgjwS4k73ZBcf1r1jLZrGnp4xfbQMpJeECvvnBJ67c2bDJVTsHSdz79Rorn",
  "key1": "5Bejg76yGg8LBSjTJtBXfo8HRUuqxZ36BkigQeSdp7b3rs9pdgYrq3e7Gcox94scaSC7HAw1Xox3XRLq3Ga6p4R6",
  "key2": "3W93CDiSoRD9W8JEWMC1smeXiCzBGi96iMx6xGtE5tmJWTjRdxnDokRdxAU5QqhwtEttHZFmv7378N3KysGQX7Tk",
  "key3": "4oGFQCDHwBXQ21QXu5HoF4QQZpfZY8yeTkrF78qjdpiWranxv1UcKZXi2BYuxswKszj5mMuBUXocpt5sHsAT6sWe",
  "key4": "3TaPNKE2oUkYvQH8kBKr1ZQpRoFpWcMUU5fx2zqNYmcrhfFZEiyozhEYWUudjoR6LrK9ab8RPseJiUabFoeQFT99",
  "key5": "5vdM2QSvVUAua35vJyysgKhEHcTxYVVQkq6sg3UYMhb1qdtQ42GHL4asitCTT944ojUJuwou3ry7XbWdLYnjwUDG",
  "key6": "3HeWPFsv1vg2x2hdjfx51eov3YyykvhhbVRsmMMQt7CXCAtbNxshRyjHarPo8XPQPJeXaWFFx6UGBHPgh9r7pzfF",
  "key7": "3pbsHE4Styz6w7sr54acZP3B3i9P8TA6rw7HJaZ9mYMBCeFzJ4ZZ2vtV5ZSVn59JUREW6MChsJMFewdgRsSS4fzT",
  "key8": "2nHcx993zUXuYnu7XB1qAWF6B5Yeqz2muDcfv5tA5iu9FTq1YXucfrZVQ39XHMeU8BgpoTxgxd993hhHSMHUcQnf",
  "key9": "38fCCB1NarRpPnWFxENcf7xpXQ9MwZDGs9gpxoakd54Y8E9fGSSdMKCHKBv73RE5cLSc897HdbPP9AfdYuQVo227",
  "key10": "3XygxrHH8QXV2f7u87zmtNycKHp967JWFEPdQrWdtmorDP4Nr54FDbK41cPfUir8ew7rSGR6oVTUW6jc8w3DKwwK",
  "key11": "4HZwpKx94gnZisb7RXD3AiMp7vjuN6QEevnxUZdjkiuBdto34UnUZ2HVLFBtQSx3URwM1AfAmf1MQYndZE4Srkah",
  "key12": "2V65kNMJwUxxH3VCsCGLvcKEYGqysWn7cwstNzdcqMhrTfefHouc3TX6vnuKDkACAcM47g56693xnMZPPxPEbVEy",
  "key13": "2477DajxEQngJSUvUzZnsYPbZJzVe7NmcJ9H2aPdg15zP93VUuYGou5EKVMziisZ4jt4GFgRHsjM1pPCH8A4UdoQ",
  "key14": "4Ax1JwwhjYVS1kA1cGj1Li3KmHyG9Vts6pMV36covxRGN6Az1J4AjBXspkSEN9qby4ukLTDgc1wz1ZtChUnQnvdU",
  "key15": "4bgR2RzBVmW8N5PRDPvWHYoPVVjzP6PoXs7wU717SMNfoMnF1H96CnHCM6TQzeiJSu5GDCX2gWfdJeyrcupnEDG4",
  "key16": "2pGa6yuVXNZoo1sq5scFNkMQQt5AREuew3rPnZxsv9FjcVGr29Kcv43MDBKSaYiGx59mc98F99XTFBxy4EfwTJ9Z",
  "key17": "2ANtSjyfAQnmAxfUu6rGLuVVBbkZP2XWHHybF84SDmQeLYi3Q2GFZfrht2rxMhcn5zKThvBTipGETbFCGwbqW5Qn",
  "key18": "3kCvG5XeYt8d9hgSJMocm24ejqTSxXmfyo51WYdCMM6dQa7TBBMfGiwUMJcXRmAsaSaQBKxvQWHck5Qj9SX1XNVZ",
  "key19": "Xs35ozWmzpm3UupCKmEes6YN4oEMXKxVzZMzXPygUJYYnCF3pVjvZpW1HEUi33sGbrg2oKqTF1jrJGZ8nJJ8Bfp",
  "key20": "2gCp9xz3ckAGA3gBd7aLTBEHL2AcA5gWXoNDPjDQeSHk14UoNTdsmeLykEtTeBKVD7NtY3MWJCpPAQu7qX9jBM8m",
  "key21": "66duYwwqGCoMPWdKi58bpmXDn7r1mcKtFZQcySqHuZF6YLciKi1haffSbuLpYnjGoUmHS1wNjtpxQ1qUcv3k4m3S",
  "key22": "4ekaYNpuKzyYGAREpLYBFWKJz3xpbiihaKn8KZW4ww63Yk7cbSfT13k4hQcH5yFcodN68VXH8dDQyciwKX3Qw86",
  "key23": "3B5vwDP46kkDS3dWzDtYm6LxLJ9ewCCZfk2xfZ8bxfM7MrWrNdPhYZfKmJAJPHMDsKj9YTTc9bRpESyWZfC8MkiR",
  "key24": "58NRqXAjfqSS5Vmuwjf3Kx948FznNkCgranRmWcpskjREjitq4BWRQs4MPDJq2qH2A7rTQrGfdVxDqaBh6AkM348",
  "key25": "4N8o6rmRuq3HwnNFkwwdLgFAM6fUdUCDQYeTJVGZZujWT1yKVBcKiFBsfz7DocSc6NKTHDkTCMhUsT6SA5iySgku",
  "key26": "2qUKbtaMter66MLNPVN54TLkLtk5UQeVg9k3xjqcWVvUe5dnnRubJ1kSzBBnhcxcioRRjhpbo3xFnQDb2SpsDVP1",
  "key27": "5miEHipbkrgMpXM9K3MJqWgovznMBzqeoNuZy9Dx85frJFRCXBQ9SevLf9KihVpqVcvF753NKbwZutSijVXusQat"
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
