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
    "iF5sR92iK81EFE1PB8MNAvVeTreapwiNqgvP6bQ3UWVsuBJfBqsTduXMp6nG85wKCk47ZCp1qfj6wwyd45UDLbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gwSpmu4q3QsuXkPFgS9tyKXAGSJgMbH2gFdPhRFoMZf8xEZ7f4VHFxQz3vzPqrUh57JMvUxheLpJr9RQDfS5KUh",
  "key1": "2nKThYQighKE4EyxvykXfHCSqWgv849KMbgrJ8SpbHj6rWKBFV129kfhVzDTPk7CF3XTL4iJLh4xWP73HDHx3TLz",
  "key2": "3dYaTFoEoioxkgGYmCJJ9LReuCuwYybcTpZLzUDZvvsNQG2DcmBThDiLDitfP2utSv6UVzcZSuSmQy3CHT3KKzib",
  "key3": "39uHgXxe4hh9uEr3Fi1ssGuiaV3zBRbJNaXSnLszsUQAEqr2oKPSRpnr5vU5jKPYyCRVTASWjGf7rPRkyJPx27Gi",
  "key4": "32z7QrWCobYzLzycDRbHndqNuj4krex7Au1tqQ3TiqaG6nyn7xeP18i95ykLJo6X3AuBkDUELizx4y2YGRWw1fyX",
  "key5": "4Fc6hZUY3qkBweANdGXybHqqbQmpaayjgS5SjcuXiwKjYQKh61qENndewgnu8S8F6G9GiQpFMBHVULfH7CyQg3qe",
  "key6": "4iqP6UDTmDd5eFNTubTuQ6SxTqHNYAciX6rb6LpVknXj4JzhPMtaZ9HGbf6zJUNZXF57cJH8nS6NPRgxU5LBdRHV",
  "key7": "2Dq24WRQ5P8WtH4nYYjnxH6RqhFs7odGApAQ1oBack6HS6E5tSBNPVCxAnKnzc3vgDfwKS896w1zn2GyieMAFULE",
  "key8": "4NDL83QiQCBxUqvYMv2FzN97sbEpFGusMafjMx8of84tPm5NgG3t2WyN8EqsQNJzShZuC9yFaN3Wm1qGBhvvYqG5",
  "key9": "2PspDTKs8xSpUgfDCktgQ5bJQTEmRvfTZWyNJtnyb9YefHLgeMWqU2M9epqmw3yMyXNpFkPEgxZfhjF92qRKjSnZ",
  "key10": "Fr2m5anoqgdg9W8P1pyqNd8Amd1bbVz6yzzQAF6rs3gWVYL6Gc2rLd35L7PckNWhay3uTxbz6JcPUmuthfNG3fu",
  "key11": "4cKkFTQi4qTki79h1QmtNRzRUeAKZEuJP54Ent2cs7cjkc4EP4vjgwQtNDqmFSJfXHhHx5wmQar7wrQK3Q94VzQN",
  "key12": "4uTRgfT58dy5Kj2HcdW2gFSskJXaQP82nJT8Qo7cUFqNyCMSUizfWe3yFdj3Fq2ASbsGBAXjscFinCMB2joiQ1Fv",
  "key13": "meCMMNBUak3zZzJQmPwgM6ZuwFTfMs6mQp1VEhgHbAoMLijPK7BU7gnoxeF42dccafT6peVy1GMEtasnDL3QW3B",
  "key14": "2zyoJ9u4nwmaLYyhg4Cu3YvLqd9kmD5sQg1Vb1BFuEgNxAS5xkTzEBfn73F47t79a1NY2RF8X89BBW8Pq1t7TnvY",
  "key15": "4rdSLH2TcjApf9SBE72hX23ZGQ9TbYqk98T47FV8yKq2oH12w1zmoQwhwuekW324aJHaRDfbHBqxec4PbQax74FL",
  "key16": "4bgc6M5KpWnCTHe51JoAe2g1Q6M8apg4C5FtreRkq2JD2UHFQHgNNPvfgHs6kjpVvDnpxj7EUQtpJYaNueYMZ3Uq",
  "key17": "3inmwPKfa5na2JeYwDNJCdQS4AQDZnD7XP8ccrqMVoeQnDbkMeqPHLYjvSfebAxKWCiPpaZvosWixLYpyaoyX6fH",
  "key18": "5KxzPZ1iVmThHan1pVhcU8dX6HfFEE3DLbgDMU9a4Wh2p6rmRxRwT51c7LMr99bSiUAsTWhmonsP4hYkZWubzRbF",
  "key19": "1ByL4d6Q78V5ncNo5FbU3WzgVBMnCUL9u2Sx32sGrBDZvLbgGCXCGqvLeUk1uU6YmNAkD2n3NYyZ3CiwCiwrGyM",
  "key20": "26mVF75YELSkfRJoQApVsdZKZ56coSGmANDGWa8ieyvMt95hv1RwKmDH5yD7gTKjdJcwfsw5CheC9dR5XaKfLmKa",
  "key21": "59fqV91GnGHnqE13LpsQYPJM9JKGMQAnP8n744PodV1NxMTdaDt7zYrytK1CJWGXFqoLwYtGXmQg2HVx7cXAJVi5",
  "key22": "4tTxE1eSHnYDGc5d2nZizK1Dg9aJ7gsyXaFLcotrsdDQTaqpVFcTexoYKRctDnp1Ugpskv7RZ4oKFpQ7qgqaYgnN",
  "key23": "5Es9i1WPgk3Evtod23Y5gZ8kDSnKGnoZaayWc3rzcPj56KcX1BD9UAB7JzfwdhJayY9Pinb1md21bQ5WZa5Bykis",
  "key24": "4wFgeGwtELpe41y7pxqgDLpp8F7982wv5j3Uzjghji9n2CcYMuYzAvvhSAqonWDdojNLKEBNxsQBTLPyrNGwDXbq",
  "key25": "2UHTDTMpopkbFmXbWbNKbVDcQokQmUMNjKkXSzA36iSrSznG9ZuUgUNCCNXQsGN5gx4qXmcPEiSioPHFBNLEW41A",
  "key26": "5PkGZDiqRHDcXDJYvsF3TzzNihFhZsiZPgKEDM15LpoarcYimVCpoxrSnpwxkSfVuYQrZcqJScHUm6bJy2HUTEgi",
  "key27": "27MyqN3viJPBSJpLJDh9qq276LyqezgCPtkS7LtFqggTpDnKfUrFswt14ELrsUb1VyQ5tw2bhPtv3rb4kNaAPU3D",
  "key28": "34ZjSDz98qz898KMguQGTqkEgh5JojwzK3uXNNhom2KjaXcCMZivRhDXQVZ97iwnmURthxPVygGbgCpxNG2NYfV9",
  "key29": "4QfYCz6hrqnwmX8mTV7mRGwuJHwBK68KbBcGGY7X4PU6tet2ZemjLoAvWoA2jRs96wgUZLcPxXg3CFKEa3z74Qox",
  "key30": "FmZtPeWEExDuMTJeQFirLDNr2S8cGUekdRV7zbvwSAwZLeaLQ4QAmYBdyawXN6muZwNc7Y1e4LVwobSfJVfiL4a"
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
