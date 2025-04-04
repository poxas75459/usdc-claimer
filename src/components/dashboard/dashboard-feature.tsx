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
    "1JGKSxkqrxM2LgbWZucsF3SDtNPXLjtirDPoUnLQkdtEt5myeyoAFPePhjVFtUP82ZWFB2PbYB59ZdfmCfEqmtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YLbqtsFvKBwcfBKcdZY9R2vasvRKJ2HkVW5kaPBkHcNEEPY4jGMzCwLvnD6aCMAZ6xjNBL6grq2wknhyHikyq3e",
  "key1": "4RrzQXacgF1BQAYvcYZQQncWkiJ3xBrr3Doi95xEceLR1vVXPXP81fF2LFmZhJupk7aeRSH5nFoe6P67EUhWRm4q",
  "key2": "4fvm2323bAkpgRNwYUNswkesELs4rkvd6j8Y67uoRdoSVWWGvrGujb1VoudTSVwpWmm35U5WiRGnYJtDB8qHB1iP",
  "key3": "CxzU3EtGVHGubAN69JKhfbaK55gUNThd2U2G4avHbad1TwhqeKbGjE7dZRqKU36PpPeH8vRRrUbFCZSeCJUYfnh",
  "key4": "2cJNBkH8Txye4PF7MMBksUESxgrkNHx4LZcdNYJLaAbUzayr8YJBAELk2kbswvMkpQLr1rvxF1ZXMXfpvVaP4Tk",
  "key5": "41pECW5fKGJtHBfACGuFT495dJrcBFzhgxnMber9XVeY7cqws6hBuejEFaC9hSKyAB6zXQkuQCRHb2D4gEURqWe8",
  "key6": "4sm6T9fiPY5NkHaWj6qpfb41UwuAKJNnb3E6CERwBmTzW3tduVCioKq52FMuihDmPm3fRKtfMinJsqpjuiijPP5B",
  "key7": "h4NVWTMrdzvArCphyTnbhcPmaqCRfXnjyky2hJty6vRBX4VCHxNdmLv3sTPRr35KAn5mv3eKv1usLL4HonfoGTZ",
  "key8": "qmNthTWZyLYJQUK2L4w3bJAS1Unz9XR9DU55bUuvGrmCgmbC9CHPG38Lnk7woonh5DwFLSmTYTzPgGV9VEx6hgV",
  "key9": "4wjn7QxBFj2KftHEhYTApo9V1moTLMcw3WLNTSWC8MkbM16Z1JR6VZ3a576e1X3RYrWmcVS4iEiiX3qZGzMHRVSw",
  "key10": "4TPYBWioX7pKDbfcmxRnmdwTLGeeTwkdSxW6kkEGyE4xKhr6nRxVBEwBEe4FGLedvzFPCKoEKphULBQuGy3BStbB",
  "key11": "38Ggk5ZKwYm2K3JyLP58rD6AXt2mdjpzusNHcMDjtKsnr7GQRL3YnuCFeBtfe8r8UHUiP2U6UBY6KhUstc33V9YG",
  "key12": "4AW3LhqwH8BK11AJjgCsaFucRvzKJEXRhw4AwuptSBp4iczRKxqYaTnD1EWL4ZbMy4WpZx84GpPe9J4Z7SHyTHU9",
  "key13": "4PCAtZvAp1ubsRmHc2fg94MD6DJ39FLHk6Se29q1KFe2YAHxpfdZPRubviDJCbk7XFQXLnRZF8KMDjcGm5cwiaSN",
  "key14": "5vr53UZaLGXPH99AMDHJk1926gc6R7zAA27cVZje7irZTFp8Ghjk9rLbFQ6koGokqqspdEgqqGBiE1AfJD3fVaT7",
  "key15": "5BHAYXKPBm4es8yB9pYmBXToshraKWYVDJPoYaB7fHNBspXkXiCFoWT9uqhbN23fx7AcQ7t9E7it1qAaK84qraXa",
  "key16": "27sGBWkRwHHiY9T3rHbminrtDig5dF8WCgiEY5LGxnuttRtZ7CUQiTejCU8D2MtBd8JN7HyQxGfJr4gdkxnzb8YP",
  "key17": "7GbUXhUvPJKG8VH5tmk5pstfwx5YJGBWMKaJzFhdx3oZTS9YH2RmZW1hotrnWTeRyTR4qcesvNtSK5dm1JmpYS3",
  "key18": "5qqskyVmxG3BKcCWvTBuEYm7CYyd2Jf82tLG38tPwmyPhfGQALNCZJNjhKkBc8Ki7e3UDirK8kfz8ywuY2d6PPTJ",
  "key19": "5Rj3QLLe7cwyTeEY1NSSWAjYUNJshpDwJ8T6PdzGjdpp6UgRgEtQ15WgVXgmL9N6BkpAJwtmc9pJ8pb1CQDV6Pxt",
  "key20": "45e81c5ZSumKgwgesyAh16nexoVZsGDEQ2Wse9YPddEn6Sb5TgAE6C1x5rZdvjNHRmvYiQbnBuerKqx73eDo6rmD",
  "key21": "2hQpzAbYCc5LSfzJqt6kHeHWrzvGnEyVmHmnjJS8qvkRmyKvCqERUuvK5mymojMV1CmzPmSCLp75qVB5qeVjCG3d",
  "key22": "f7Pc8Ct56YexefwzgZB3856XwzBsx9mFxqe5rRNRq1yfLYCte375DNgTG9qHxnJnrRoZ3vZ59idtEintZaLX6Mf",
  "key23": "2mMznJkga8XWZ3eFuhqddWRPUwV79w2pd85f7D2eXjVEK2Z9WnKEdUNzj1DetSFLwkwCvEe56vqr6ucmgZKsRzHk",
  "key24": "3jzNQZ1fcKcZDaSCr27XtDNmZt9TQ8r3EQQCKsMivkjqNK2AkcjhNpC456o68hR7A6eD5uWmoYd8VpzKU8dQXLPo",
  "key25": "2T15iRiAuHcHwQfj6kWp95YzsE8ccVampe2zpLBx17eryc7yEgZ2okocaKKBALaQSosNwe7cdckNDrTKXRoLTraC",
  "key26": "3mZDdx5k4Bkz88ptA3VsvCooLAtGH79eX2UAjQAFbf2WXC1apvWDM6x2Z3oBTK87VahYdzh5h8rQsMLSwBppEc3F",
  "key27": "FZqEAYEKgLe62idyLH8NqqXCNGUcwo8GvRzThEF4dkPfmFHeHaR2k1MPiq32grJtStgxixbPXq4hJd5V7D5xDGH",
  "key28": "4nzWxiroMXPxaAJrZeTqbGKhUxW37oyYRGn6TgGhn1UxUBopv4mpMeX8sJ7kmJCr5Anc3dJYFKRK6CwgABCRqVQq",
  "key29": "5prVTfvRVAnkPzxSasBbbZF254dKY5saZS8DWMKTNMymhhUuvRgzduEJUGNYD3ghSxa3FUAYqcUMUd4uneqWG5zE",
  "key30": "5ZjfvewYmFJTaFzcgXTVasBKsspXUwGpouGhk6Fuff71yrsThvsZuiVaER7JXMkb6C5Ms2sh8ZkZ8GgFkhNsu9EJ",
  "key31": "3mBUhGJApLK5X5UjedV3YnJcYZ4T5vApGQ76rYDJcy3xsahjpJ5w7UsfF9pvQtcZuXvr9gQaogEpdfrJpSo3EfAx",
  "key32": "36oxtPQypBQCLAdgkxwHLMB8W8DFaqR9UBCodrtoDMhsiyVThM2SbhMxaEtv5TERMGP1sHcrgFERPPutLcJbpuBb",
  "key33": "4Bx8nmvXzVczenBAc87wB5qo3EdxgxYwfSsfkifgaKBnGRKMfnp7B5W5evHw9Jyuc8KD4HsV7abZ7kGBfig8X1EU"
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
