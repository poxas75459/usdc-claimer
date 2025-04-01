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
    "3t41qQSqy2beop2mq3WfVN78BTHKCMZEHHSHihq4rQT94HsS6PHYyd6XFh7xWS2DnzqAPVN1Tzv9BDLxzT41fQWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QLTmCPUP6BWLbHVTiQ2V5eMJjms2x3fcGGq2kQK9zdeVQh2V4x7EDa3xfKMcKaUhHuJ7qZXQQMuLaAuRmLK8Gvr",
  "key1": "yzQCbGUpjLnD7ESX9ifAALCyUsVhFcqqowg6SfP5Y5WDeVvTVjrN4FRnFRcJkobFq44uWgXWTXKXF89qusKMEJ5",
  "key2": "5tUQeHRnhVZ2nwxbqtcaANJJq2LymhXWDmwGjMJ1XKKGvxBD5B3UkZAbXEQZgxDjHMij2pMAqi28hvJUMxEvRzJ7",
  "key3": "64VudZ5QXiMU2jRkWcN1owdbdtJp9j7QMnkSLapJvVSbtvFYUM9psF39Fcuuc1tW3xeRzAJjAeJqp3SjGHJQyFAy",
  "key4": "2S2Gr1qyQrVV2cQUMcCs3ZcjAESFE5yaoLLTM52VZDxszfwG8fqoosRD3RXEFhEUFDay9Pq2G3WWsAMZgW8shp2s",
  "key5": "4cTQiQvz7VwMdtBut6QjhFt6J5wwyiLekt6uXn7kQt11bjs1kf8f3j8fNpHhXZWfznDtjkxJb3C2wGA6TTDfUNNW",
  "key6": "oHRtZskvkMJFaGH9x9W7YWymC9HWwKB38kek5QctWFZzttkQr8bwy4nXvNj2QNmD7iPkpF9GxKxM2Tkq3piQr8a",
  "key7": "5buPh83epWir22ab21YbmV7EKP9B5kMWwoVaHCrdMkb2PqtMcDQyWq2xYb8Pef3HaeW6SvwDjx5TuguiL7qMmbub",
  "key8": "EVWLp3ztg5zA7MdZ6AN3nWGQZwXUAoXCPSeb5mPvMWDhoP7GpGnocreXNLnpPf3txqeHpBd2UD7FG5F98Tic6Kg",
  "key9": "4EUxq1DQD68BrfTYPawWxhkB9erP3GTV1YM5C4WG3B2JbX69Y48bDzdHsRDr9kKubEHLyDMz4Mc2zjvgP8gwpFt1",
  "key10": "3U7i2DVp7io1wcxRN4DJeVUZYA2E8YckbPwSDFy61Juf8WEX54qpvhrYpwZWUAhGwCdKkM6s6EjoY84UAydiD4Kr",
  "key11": "4EizTXeHzRtx4LGo9PojfPZg7wCwJftviTa6af16QduwJDiHfSGgARZkZ9dmJXXY5idcVoaARXdifXNbfMnCQNSH",
  "key12": "5iqeb3Ue92f99dCkZQK4Q1heMneCDR723UJg71tjkfhxAF2pAHstuLpu2edE2TfXva89X7XTb5xMb2fzkQbvafZL",
  "key13": "2Uh4sr5JKYEP9ur5h5NQLxRYtNcFNdo4KipQ6roxyBygHkRJ9vmru2oBHkE2S6D5P2Q7aLeTXeNkXAqPSWfFEonH",
  "key14": "3XB7QvosWY1BWnQDgbPZ3kjW2qoRPa2eo8LrArCh5uEayzA9BpYVorUWWjDKvRJd79DSAffe7RwPK3svaeS6aftF",
  "key15": "fAgJQj3V7PSpySARbgmT6dqkqVwvbQj1EarjSDASMVtMz9BhKhQw21zNJ5Jem5N3q168N7mErZXNJSZxprbzJFn",
  "key16": "Xs9zQd3cevJ2fCNskxvN46T9QKACvRQUCyu3zawakTQ6dKoqU98UonqKj1fMNBf6GGx3BTjyZYbU2JgtuzCa1SP",
  "key17": "4dXxvATbeqkemXhRjSX6rYQLY9JYVQ1esWCLJFsHMZyFp9oaqyMfouQwbhoP2FihsSwhv5RrHafbpG2wUcDFZZ7a",
  "key18": "2CeJ64baCNwWrd377qNRghXFy3EQKpzXppxmrxnXs2XLE21uFsydo5UnEPo9rGLQBBSnVi9kjaLMzpwnRt7ToBcg",
  "key19": "67BLJ7Z4ybM7yZSVwkdpNtkLjsKQwGkSeRkGFAXz1nk1E4bAnrxYP9jF7JFyyUE4EAaRC1xuUF5EzvLb4FUF3p6c",
  "key20": "5KyQw9NDfPmnWYUfzvLGiBQNGVwRNtJSxPxQC2yJUbcgqkdNK77zGR9ErrwtQ7YVnkmU6pUnaXCCu85uT1i3ggex",
  "key21": "3LMimo9WLXmmEKKFrKtuCz7P5gFPFeNUtcKggXmq73eo2jhJcXkgauq22dTtavGYmvMiWbbntAy9dxEz2xojSgzn",
  "key22": "5PPGYucyt9Cxuhscw58i7H9yVNUq13fEu7AwoW5QZSFfp81q9fdFDEmBF928ja5dKFmLoNUmzNkjWRqKmujvP7Vm",
  "key23": "3rH8mZfLrfyL2BRnrCP25YNqKPp8PtQPSb9gk1KSxDshErhreWTALhaaJPM12ReazWmGm3cYbdJzMj42tVHkBZCU",
  "key24": "54iUuA6TBD9B9Z1q63PJ3gU2ALgrLAcDvNU4qSUu45ueKqMVZzPEf5cQWzFBZYRB3EAxgM43ikHYu2do5Sx3NAfm",
  "key25": "SsU23fqcs2hvsy5ksCn8d7JPZqnsFiWttoeyx4K1cjdVgYbuxqQ3AGX4pcHScjKVdQLpY7ejdndNH7E5XvTCLXP",
  "key26": "66S8EzCWrMKMC8KuqVTZSnEQ33P5SSwXkRZ5muaQLuNgRMAUkpGSXyJEf2WMBQbWdDxfVKtUy2SDwEhWPJ5LXZC4",
  "key27": "3551W5KyquyFTKYmDdSHbunGCPrJW8CkUCEaft9go8kmBbJAUVjfQFJ2fdy5ivaQozWMK6mpTSnpx7kJnQCKYMGN",
  "key28": "2p3igPpyakwfyzPSkhTzDf5bAADsNqQRjzt7W9mGmhtBtaX9XB46Dh1NEteRgQtUJSxvxt8QLL7cDV4BWGYXaAMX",
  "key29": "44JWp3QzfUcGnULz1RAg2SQAemTdd7vbzD93hukkCvrSeEDmBNNdqNTQrk1zDZwuJZ2dVR9WUcx7BXkYuFcxogtW",
  "key30": "DwjspRt1Tp7DzTEBfGasXHDmfHe7s4hyjmHyGfDAe2NpxHTZHWCc5AuD7v33FK1MrYnFUmDXbKyoA14ht579MrY",
  "key31": "4Y9GwVrNW6oLaQKLxgst5M2gibvt5Yyg6nbKSZjM3npinU1QET7RZfpjfpv9sc7nqv62GMHEPH7Gw6YZiFGfMT5c",
  "key32": "3UXCdwzD71Q6vBut8DokbhChzHtHGL4XDJkf9oTMu5sLecCwbcTJ8vZzQE5zyaL5U4PaFn4YhwW4ABqLThFuEXzx",
  "key33": "2C9c4Jqx7oLX8EgPUyKEk4dUbrfYUAR7V42uhtRaZAmTYa545K8JeYM2vwVR5GChM1R7tAzYTHzNzBQe77xBjsqu",
  "key34": "Hx7M3uUpuruvYoaymyrq73hcLWTFmikRe1G6CQMaKiF9asu3iA2fuZC9hb7dD52sm8dUPKpGkeWNfvZdpfgwmvq",
  "key35": "2YxKUqYQWukusR76zUb7LCqSL1nF7LsAE2WFNfNXNs49tMz5w6WZoccCPnhYXgKUiNyjx8h4RiCi37BahnswbGSM",
  "key36": "4HRnuhPbif2uFdiAC9B2mWKD6TUit3QjRWq2yCADmjqeW7dmgetmCMVLjtMbbzZ3pVBG9JdRngGdvyd3s4rscVnp",
  "key37": "3UQ34tES1T2vgfxjYFzSJffTrozio6pLMUCm9Hk4roG1bLtr1HYBgwgKcQsGsUPmFB5sAJhmtEkRdVPagoD32SWv",
  "key38": "5fw9Mn8YBk5zdKXSnoitvc2sLXCVZnj1Vf5awJ8WfRXQ7SHUhSvrm5WirLKfvdJo5FK8TaeWQaTPMThHkcU6357T",
  "key39": "3iYajbVaMGG8uJkrSQcmPLhBiEWKY8GCubWstbWV9HAP37irKhDvurf73tiJN4MXQ4eF9pz6myP5ZR68hoV89U1D",
  "key40": "5najCdxj7V5gPKe8dAPzj5dJCyQmCAV7e8uBhiCzekf7gbzLgzUeSYTJ1uh7ghNN2JWGgMg6zTQSHRaCs3hpSmWt",
  "key41": "542JZ2Fp1EMyjvhSL5P9JMyyLDvQ63v28gah8CXgRyPuKDefAUCquiSMZjin15takszf2XZZv4rKXfPvPk5VjsHR"
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
