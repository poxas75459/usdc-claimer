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
    "4U5CjLCTfLW9QToTDK5ZbWuV5V3qVcHz9yLRLxuSLge2xj21vmUrUdbY3DFBqX7KvwM9TeAABH7RbJUhJ1A7CcyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36LyRroQEmMzQDi36bR5cvadYeZHMTifoF8JXWH3qETgZGxqDwpPvZY8zwaesp6tybviwyDMM9LHKBntHHCoGPak",
  "key1": "5Z34QMkNQrjjeS3FCzMQ5F2s5Yq2MViot4pSFnSJ89KQ1VryiyFMVfgaVnNyXi5gza23UnjnmyKRB95G4kCaCZzb",
  "key2": "2rLkbackpfhw5QEaLGGFyZ83XWGp8xxe1scw79zj1CQgyMPYoRmhBSSsdcHqW5wu2KFDZso9ykgLfhUjZLk6RyGX",
  "key3": "4NcdmTBV3S1nsvK21GWpA9pvAURMt4sKH9e2L4fjsWs9J1EFEQmM7qjMYtaznPgQuyzA9JtU11H19WTuozmVE8dP",
  "key4": "4nZWec8XU7EN5HikFawAfZqKtiKTMy1EQzwqnyuSDzv7KtG6KXDapXjeMmMKZ3C9Np116NyrxG6vZSGMRmz7V2EP",
  "key5": "35Dsugoxed3t2GQ15daJLSyV4RJHjXsT2BLDSJHzRqY11u5J4qvrG3YocyRwqXyS9b6QCTMEBTmnaiR7YLG5iDxn",
  "key6": "5wJiLmcBueBC94r6voUZHoAwG2wuEaeHPWrSAcDKvAAWhsYLkXgYppc6ph6MXPBroTFGs8RwQa3gC1v5t7Z69GXx",
  "key7": "4u1BuQpYnL68FVciATLJz2uN6UUE94FMi54xwNCVtHi9Zcb86UZ2D2VJzpwTRBiaEWideMqNcjz5SzZiWGadLnj",
  "key8": "5eirkJ57iDWNd1GrXe72YtHdwNz9jE7cWfHPuA5tuS95jyag7hj1UDx3XBFY6hT5gq6UtmyCG9PYSoqpFZiNkMvx",
  "key9": "61CkL6SBuiSSh5T9oNCArJNtNDtYm7KDrrTzXfPFYqzxhDStqxDpNTeWgwFeeTjz7X5pJVziuEhX2JRLPjTUjr3t",
  "key10": "3PYMwJwqUF3Bi3MPXhnpPamFNXLMSD6jqyurdyfqy52wLGo4obayT4GpGy61MGYC2irDQdsf5d1Rmo6qztc4NkW1",
  "key11": "5iyDaT3dAKEjabbWNE1wvyTKnhEHh7MGSPk9fEVNaLkvf5ds4tNWqsMy3WrB5tKTx4swPHGnz1TTe5xS2G4oaU7x",
  "key12": "53vLpFuwUNPXuNviRXPGok3DM56nZBQ4cMAAy8kXBLTmaW3ZtRE83kPXWaTkj234N49aYXoo6jvFwPv96y2L7wny",
  "key13": "vgVAEojfsfCoQWLyZ6SaTVHS3cKZSGx6M9x5Eu65jQWWP9GZQm8KqBeawfvMHXGS8TMWrQuPkyr2mzY2DjoM8fJ",
  "key14": "3nwZeRYc6uLeMe7BK6S91hcifghe7tL9ZzAkMpJbg3gaXZpPRVjKGrJqG2mGZ8Hry6cAgBZAioeeUWDNNoRauHXp",
  "key15": "EBD2Qwwf3nukCqAgc4zmiXoewAzJFTQfY4LU1onwi66SPGtNTbqtnTc9KiZgtRDeY2xe42YJUxkdxBQY4ND4rLc",
  "key16": "24hK1fTQvfbtvzDc7Byg5FDJiBmEBSrhaUoQV58wjGfDfWP9bSwycVcyCmHyZ6JezcCxsQ3dwPtAFLFWysCU6a6M",
  "key17": "2tyTuZB6TZAh6AQiycEmaNjcGcowCEX2qqccGpNJp9LdVtEiBWCLPca5KDr4ComEVjG7wyB8n8X9rsBQXwnaZRG2",
  "key18": "k91fpa6cJgsNbHJ1Vq5ySdTrxer4p41hNYZiFvQDDvrgfv6mBDTo4Bpe3Lkzvw5XjnjQ1yRkfTiFQzQwxm5DZHk",
  "key19": "3wa5Jd71G51ovCmkqDz6G8UQHs3fEC2HjRsX1mEDD5ZJvynEq66nAaxSdifm8jTMAVy15ddynX4uWQjA3knbmpjA",
  "key20": "aZz4YcvDrTPjQoPB1M748Lr7fGfjhCiLk9Wiuo7nUg7zsJjNVaYtGyEWuWYqgKpPFJ4b9izpZvXkZEha3pxA7jt",
  "key21": "3qdwtXb8xEpAW1xFXkJGBUji3pKJfEYsSPQU35dAznrKpXDwaujczw2Lyci8XBHTPD6DdVwFKPkHESHsDBYT5yGc",
  "key22": "2XNLwWUZdwC95YpCayybhCDKeDHdePC6MvfM9gEwkdVNZMdFdLiBCVgxy1YGvwf2jjQGYBR1nLzH2FMePiQguMqN",
  "key23": "2MrNb32x5N5dfgWgLJhnZ3ZzCmjEM51TPGmepii29soKXEpJb2PX1gG6LL4Jo1mdDKonBdsXSZHndseepH7rZCBN",
  "key24": "2ZNjPGiAnJLHSMztcrggMB1sjmo1QJPBhQQ8ydGN4vVsXdUKXga1wKj6URHRaPC3VV93KY3EG16YcnrjMWQ9D3cf",
  "key25": "4bPk7t2H6NXxbuSAaf6LGV2pGAx8zEMxgGy9G9VhnycT6LJZ74wmC4NV6vzFVjPz3ekCJatPYQYCd1BPaf5CsE2i",
  "key26": "4NuEDQ37a3b2xidaTxNfXsYc1NrjgisvcE6bixWQ76mNJipTypVH9tp4ZicTe87H1ow4hcYq5rmptEL9hbVxvdum",
  "key27": "2EJPMRSdkH42cyyQNRr951oGNRtdYfUjV6jum2FPexQM6fyGZ8J5MaRdCVyifMjNt21mdVggQU93fRc39A5cpJ5x",
  "key28": "4tMt88afqqttpKwWDPF4o7Rs8PtRxJh6SGTZAdtfmFYyd2piNya71b5NRNLS1HuXbN7sniXbBxvFfwDQZerkseDy",
  "key29": "5TLABHW1qMJKbGKXQuREeMjcZxLs46xE1KZaNeimduBgqKjfirXX9mUdazJU9VcGWfStg9RrP5onRmZ1oPmviXV3",
  "key30": "63vxMJH6tty5AwZ2M3QycJus7L4ajtv1GB5NSm8rGwCpxbViMxdt9cKaZ1nwLwHYLTpczPnUCjLreVnLYoi12G7B",
  "key31": "w5nLsLzzDA8YipvKDKaAbM5z3g74QwivHnikCjhdEGYPt7eJnKLRUtKUgUthBJkG4revBofk1fZxiLUHp6uNwk2",
  "key32": "5pBQTp5w7cRMCJqVuCMuFNYfQLP3HuRguJSSx6HqhL9p6UcWLSKnA961kkk7H6w2QRUanYRqh1Z3gruKJsA52ayq",
  "key33": "b7dYQoq4uixZ44rFSVn83VcQTkZ4oFXQgk3kNaLLfyM3BEnaXYPrc1PVem3vwHbPqkDDEZYw7nvt3mXbTx1uiKf",
  "key34": "3QSX6QeVNcsKvGU51srhXHEkyeonxu5tXjbqitcE364EcMdoqDi5m4YcsfRva7vYYk3MkzftZvYYLoRTWRsVcCuD",
  "key35": "5fhsM7bQy3Nxae7yW5KvGwzQogeWopJHNAq5Jkkpntis5P7whSzK7AG9m8TbdUyZB6vK1Uf59n9gGGAy3HPHWyHV",
  "key36": "313gewdjXiHsBdmoyc4nP45Bf8xN6rR9usEgSemmM2kqQoLshTKqCYS8EQwBw3BV36GfirydAgm1etgTJtyi3fXk",
  "key37": "358uqzoyaotAemyMBULdRhRAraLrDFXK27c36TvwTk2VPk1QA6ZxJf4pMXRqYMHHgrSJ1XX7euymtjx7uVDAbYDU"
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
