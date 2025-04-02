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
    "4BBQjByne542BnjHpj122g6FgEdfkxvnjgbLd9zFWaGQWfRRaKTHCU1PYk9FumvZEcj24KsLbsU3Dxuou2p9dmA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TjhuzLnzghyV7oxxthb9oStR41u2fKevjUAfxft8SxjL61xhheX2fFjYsEDfDEibBuJ97RoVEdyK7W4Yzo4aG4S",
  "key1": "2hgkvFhmaz5rDcAzgjmk5Yiv9ykpirjoXy8JFvuzeUtpxEWFa4Qd8s8RANJEyHCWyPAZbQk4ymTuvJViT38kHXQT",
  "key2": "do8o1T58vMcZGTbZGXaaHGbphN8wR1qDSYaRy3vXWjfeRUbEMWdt6LDVaSbz7i1ss6YJMzX7HuzS6qP2KQyBGV5",
  "key3": "29QSMt4iDa9LSVAtAAdaqk4u4K1GWJS8kgiT2sTDvCZqfXZG2UoFtTPXubo95iLD6di4f5fGSdU9hynXqnhoWFFV",
  "key4": "gkQg1HH9MrKhkPFvHHA5FYABr63FoHSutHmZkXctqrUv4bS7PEvY2VpZEirSGBK5crRAUNeTx3hb92cSLBqzir6",
  "key5": "3CdGbyxwC2ekhLE7HjEomRBkDsSsZ3g5pSaAfG1ZyVNpC9jRzz7wBLUNTCXBtTHaeEZbmpqArsarSVSJFRZUhQpz",
  "key6": "4GA9gDQho8b3n6TG3XXtQLynXZCgvobgR82De7a1QGaYQndHLeocMAtcvP2TszmhATczp5speVzYiqnJMRfW7hNa",
  "key7": "24bB7VryVVVBeoL1WhYu66FZ4PF5CdV5KtAd4uZyv9NqQs4wBwHpbEoJEqD54CfXP6YaSghTpe5V8WZPWK3qdP6R",
  "key8": "5YyAkwKMgcqvFg2d4LPuRrbPpEoKMm4FYmP9sDRRAV7fw4nkmNboenxiMx79WuGR22oMttsPiSUeiMcE9KTegKHJ",
  "key9": "4FL1FUDYxGtVmi1Bth6DpT7GwUWGyKkXfFr5zCDrLwxTiwaodtTe15QRwoMDXLtvSLcQTo7tjcVNEpvfxuQA2mMk",
  "key10": "5TsWDeXdsYK924ZTPTsb9Y1QqRo3HEfBvVhUCepXSPzn79kwMaDUfsTuv4md6oHub7uxWMFrprMS9WidKwvVuYkA",
  "key11": "QLkrLBbn1tFiNfrAHGdd4WSW3Qy4morbA9xdvFNqKhBKeVGkdRTc6PsME61NptCsgcofuR99jPD3hvx8VG4bSTz",
  "key12": "Y8xsYtC6whV8Un4VzyMA1JKB36CDA76bd7fxRbHnHomoFpHUjcnYNGU7P7pMWU5jqX1vZZjQizxWyyq6NEMz9Vu",
  "key13": "3ub7HvZheVwimVQzpAULM9Z45oeHUu4XF5CWoUuMsVnohuEfYCtUbL9YXbhA75dyzfvUcuRvtMj7qtXHSE3QH6Eu",
  "key14": "2ksMueumE1xzTXVdbNPLEWZoKM3F5kJTSNtYW3GWNSrfitbSnw5xny6dbToNr76wrro6Ku4gKUTUoqkQUBDz9C7g",
  "key15": "2S37pA3b2buLTAqHCKSsamdGcpwfiqgq5sY5d6NGGPaPSfUd3V2HEGoizLBrYhLaXuNuiHwjmJj9Bkj3P3gnhUeG",
  "key16": "4jgdUYfVcGbezMH5dRBpFHsi4vC5NV6nVRx4vhKGEajCtzRwTqtSRCa9m19KDkvNkWN32eSx9X1qjc72ZfXqWdMe",
  "key17": "D9YCFVffwbrMFGgJwFLKPM1LZYpifwqXaLde74bJuNqhGgojnt4iTQKScb6DcMEupSYdRWw1QUfEnJRzqqy9g1n",
  "key18": "4i8dLFLqkUCVEpBkMT8zdkhR6a5Yj4NhTbctuJeNBCVkC2eVv6ykXeXJXuT6vRcsAzx3QSCTQxbgPTyHHrwRAS1t",
  "key19": "2vuvGPJbuKeNxVvNtjysjDSbpqBWjg2ur5XQAwowmfneQxuVWAepA5h98dyjP77qZEeZzbDeH6wiBgv2pQT5oNt2",
  "key20": "4oJvqjb1hyXDXZj94Dq3wYnbP39xxrswdbhpwzSuDYazrsFGVdSNFqmR2HKezWN4tbm4p8aybut1fxKPA6Gtj2YB",
  "key21": "2tFFHDDWMGUvQkFBmpstSyFDtjrXWaubjw64prh9KfZj8paeEbrjEZWh4Gciu6i389G61ebnzCE1dUBiYS6ZANpN",
  "key22": "RiCiW8xy2u3fsBCr5Jqm6x9N7JBKLfTWUiuDRts9GWGJqog14CwSGWHhukRedzfaFtZ1jZXJPoWPA6nZFWWGVfx",
  "key23": "37qTV4LzpdRUum6eZ88RcErfsevrEVULS1ESJJ77GLhfHHmWhQFc6pgbFeU4yWavkoiqMJHQ5zMv6QSMY6QUKBux",
  "key24": "56RsJ2cBKyn6L8wv5aFf9PZtAQNNtEFxGC3fLJH1shpMEzPE6BoQ9e9FJyBN3L4Uq5M7Aa1bqg1F2dx12LXEmfdJ",
  "key25": "oev3V6ug92vcTm3CLEDdrJjnyyAt2yNVntDXev6oxP6BKfVGFwAtCZVkz2sr4qKfVDZxy3X9Lu1fK5qqfBnGCWc",
  "key26": "3LcKnUYBaj61cnugsc8xD5NGVGAnqqJssZyvn1Ncovu2PFKqLQwNtDdBpW6QLRz6T3QEQU99NRunNxuuK4dvr3cW",
  "key27": "3Qh8phWqKx9czg8tcE7rP1AMQNDQKbqKpsHEMdfU6Pb7K5YDFsFHMJ9rkkg8LveQWaM1ZZGqYeVk2Av1NLPo3HkL",
  "key28": "838waWKXEMAYAfyzyLhZztiwvccMXR5LbriGekPbjVe9AMeJzL519sVcFrsFierXcWTKhuUwMsSzhH8Z2u7RqLQ",
  "key29": "63bJuPa5FHVHJmdq95cDa4bSvDsLZ1tKpkh8LWU7TNBo6uPPwcxPjTiGa9QU2bLKLWbh3w1jufSD2oeqq1Cdaudn",
  "key30": "29TZSf83ZgGEDqhw9e36kn2EnHu6dZwevURbUt3EVnQt4ssSgikXjRe7jzcwJN7VQmKyAhRaNyhKEj6i1rxLKyFF"
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
