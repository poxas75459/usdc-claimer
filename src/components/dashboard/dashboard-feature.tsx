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
    "v33PPAVbPPtj4Rf8kTgAGyqQE6Z1FXdTxVGUYbGZYK7S97awnCAafVcJRuip2AFdREqxXvBRPGw23uvYAbDkWSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BMQHSem7adbLDEtH9Rfdf1AS1xokR3pzf8h5qbUTcfbdZvpLnD4S11hNDZR7ij7DRAd53c3msaU5tjHZvPRo9a1",
  "key1": "9AC3Wvcw6r4Jb3xdLEBNC2czkFKQVWGHczK6jpahek2j4TUfNrHukVs8gq2Fa8QNuLDg6kTQYcY6M2fXVcBkDQN",
  "key2": "Yk9Eyqued4CB6T7uKqpunqJLAw6AwDQRZEpnAziTGAarbfWXYcQiRNy95ka8sGyitqUBf2AGxU4JF5zueDPg88i",
  "key3": "63RWPpeWf9WJcEvThF2btJ35nFgvJ9yec96As17By1EMj1gRwzVs8vFgoL58SjDf8vWYTpVWEZquZMgU3FmowtGt",
  "key4": "4kvGhbxPppGZrkiX6nREzqBosHKotHmJzQNTnd6Ld88ND5FkSB2doZr12dRFPPxaLagG6envJ3Gp8H428Gg3bkDx",
  "key5": "4MvVAobkWddKTBGkEi86ot1bXX2Kz8FSGmUSwqm1MtUpTJsy6HqdkFdUz59EUudevTJjXenpMcijqu5W2YdyhvoM",
  "key6": "36dh8r8UeDMDxdT6PNg5FkY1pwo4i2n2hXRvA8DRQbiECLaebrriRuPgbEP6agNpEnciqUQ4Vb5Doy6bbb7rGWiP",
  "key7": "28dDyqFMznysBdJm4yfkzfWphp7hxFtWYcWWsCmMVyq3Yaomnc1oZ7PEarwVUXtkQHKwcyV5kSKVDSJXPGeoRWNi",
  "key8": "34ZbWyu2Nnmon4eJxDbpp2wBVzbp6SHgWSqHvZgCDuX9QEEyw6vGQQFsmrEMKXVoDcpMkpNxr86CV483x6sCcinG",
  "key9": "57a7K2NSj13G6XBWDWzhVvK5oMKTyCCsmhtBQtpxRoD2WUkrpsGA25VJm2irDYXuRxqE4xAqHzenTCmGRrWwAHSd",
  "key10": "m6pmHgUYsHArDEC55i8TGCo958kEe4f6JViy6HT8oFjWqrEwWzd2H2A5Mkzw97HwRQRrEWhicSbBB7LsbyQLXpR",
  "key11": "5LE4KHrw1QNMak392M12bimawuAA9uhSUr8WTtZPnr5Pae2EQxduBYQ7tebeV7yoJc4CJakaC1pVrdjXLgK87kST",
  "key12": "JdcxydXsfpNHvB8hSWiCf15375X7LjaMjzazzvkco7rqMoXp8KZuvY7mGnvs23ssXPuDNVtyf4CKoAQaouFGQQ5",
  "key13": "51UJQDtjkZdxLNPgyBUzin4vxMNfNr7g65uAicYLW6pMJBd4bhgfLGGXTeDbf6Cn5NkWNFrYDFfGFKgMb1HciWL",
  "key14": "2DzY2HhWSGEs3UWja3HJ4zPvZ1zyE7M63JChz2V1yFvPkfiiS4yNX7PTHDinoWNcREyA9JnbaG65fbMSLaM73rrc",
  "key15": "3bLuUhpMDzJ2GXu9aj1YEyqaYqwoHNLG9eLTPso8cXr7ecT5ofJTsCTdW2vuFBEhc8K1iBLQiJ9UPpKNYiYAcSWG",
  "key16": "5wFdDRfy9JoWNuuixf8Ty6XXqNr3M9xAkXJ1xAqrRoRMjjV8zEX7LM9KBtMoyfxb6YVLHSiRgcPv1ZuD2ZsgUT74",
  "key17": "2v5KijwPBuLXi13ZWa1hpTjuAQces7B1wPvDBfekKKtZ5Lui2gm8UCnDhykYgkCPE3aYSWpmRgm2WmfRiUxYnJHK",
  "key18": "4AjFr8cNHE3UW4L2Wta4Ad3DCDN36YBcCjCo5msso91rs6KSuNUZ4nKY7PK4BKRd4zgyCo1A34CB4WuxLdtuSKZs",
  "key19": "2S4guD6RkDcS75Zr7jg6S7SAc2ZJ9dPQPN5XakjtFjWmiErFvMZsTeLoW25PWREDMyvpao7w7hLSpxfXSBgJHKHM",
  "key20": "3sry35tZ3eFk8hfC7Xns4bWQqB3Z9tvzgdoG39ujsPHXxLkDjicGPCRy1z8M1rwz4kjp5aFB9QcegdmSUhcjTLif",
  "key21": "2oS8PX4khypsRWNQxGrtMtQDXceN3JThngPJTf2N4RCSk5DkCknUc1gTyUwhE7rvakkMDL6tLFbE1uckW3LBkL2A",
  "key22": "491xzyBN2AJd2c2fVD9yX4z8SMcHbkeAynuYmb5b4EHi333iBkhRwZSJUsQHjPCRbuc39oqVUme8Z1YPzP3F5VZj",
  "key23": "29yLoM7PLFKdmKwga5TrPBNSWg9hJ7yzDBC7sCr2sbctT7ev5thDYAV2F9fS6Ho45XioMxs6m69KUwKYmHnpHnfY",
  "key24": "iEPpCNMRdG9gJ13iRt4c6dyq4ukqg64ez81AVdbm8A9tvayDJYjycEwHQAWPUhqhrSt7VdJkB6kZKauRhD1YjqC"
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
