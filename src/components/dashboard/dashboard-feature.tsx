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
    "SuyG54HiDF2pNSS7YYfbPonVtWdnVZbPfWsZ9QVaa1TEUm1kUkZUYMEMx4pJw6BHrPNqyhwR5uP8foB2pfW1wHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qYDMw6UmqvRu38Lu5CbBPgtFqYc7mGekHyVy8fs69gfF3Cco3gkQhvemMAt5zmjK68iMsxDXeB1US1TpUBAnfMo",
  "key1": "3LHhg7eTCaPw98KvT6AufhkegzWx37ZxxVyAmUoEfdPobWtC4r2p5eKhK659fh98Z8mnKfAfeHxoYvFCDgiYVzXk",
  "key2": "Bka7Ekgto21pXxw6wsMT2kcupbTvaQxQ4tExAHsseeBpMDGhdQ8EzAbyYrSXYcysAv4v23HBaMdJZaGJ7abFUEP",
  "key3": "5EDefimMd7jNB3SKKQBRYjMyg8s3yZnhNUwV8Bgso8T1cQHsosyHdrMWuZvCg2rt3QWyrGxajaCG2JZA2wChNsta",
  "key4": "4Ugm4mGuohf2b8cGczZsy1cbuz6DhZmEqvHxLmMmAA5UXivb86ryRyRe6FJ3xzQufsKCkPSuxbkmaojWz9j6aFdD",
  "key5": "4miY9rtAfhohcMpM4eFfbiwwms821VgXtwvFRY4Bgtd2cLtKYckQWR1Aae3e1sbd16J9CVSZMYHoF4t7dfB9T53V",
  "key6": "j3B9oerXYEFhBv1LhQ4hRasTcTTkHgFtSXtyqfc2EbrtFusxrBnyFDmp1LYJMPWYUacWCuCAbSUsGTndTi5kwLV",
  "key7": "3BYGajsVrTiAcgBsFNvtwisyAfwJHc7qhfRPCAemALwrA7YCL2dtZeVw9dXmPN2yRyQtxc1o2jQWLT6DQwXjzZir",
  "key8": "2aPuZ9qJDuFFLiYbQYzv7uF61D3dXhsfWLh5CXUXLPbog7YQzE88248eUQmzLKunimW8htEnBRw6nUwJvfgzcZcv",
  "key9": "5vjufBFKDB1BnADGPRFZSMFXq1ZAT9qKLncpmqeVb5D8Qtfc5rozxGZbiLmaPbKvkct7hEPGaujXX7jo57EwfaQu",
  "key10": "3VHhvv5NT8r6AD7F3kqLNyd5VXpNRKHBgLKSdRq55uzVbNHPNxULRCGSfgDE8AySZAseqaKhBX3yaR19hRw6j9sb",
  "key11": "bUT3QJ9WY6eN3AAgDtnMcEQG39XvfWizfPByQ9zkRhCpHsEGsLdCjKSjKCWmKh8BjQyddzXbEJhQkf263V3HEhd",
  "key12": "5aMa5pVyEhg9xYrhwPu9vxM541o7HkBfXncc2dSHGUUgjRz1r1HNKHgVMGpx7FuQMUJD2VukZADpMK5CFSd7P6BE",
  "key13": "3hSqfR7WnWMa9yGYNYiN7xdN6SJSdhLnHBFxTwqActJFs2QNshurMukBu2s1KxKdrzyLUpuLAozop7FvRmDHWhUs",
  "key14": "2daAUa1XnB7dwiKNMMHyKb5ea138MmUP1SCVtPqhikXW8eJUvze7Wf7vS94DL9UJaEuEztwZEcZGf5bJspovAWd6",
  "key15": "5SETWxxsMzGNjMu65h1z15uXzPhQPhLR93Yb9F5mjrkphZYsDY23U8e8ayvXfKdwFEsDgZNeTovnYvmDaCFWwbhp",
  "key16": "Hh2GVKyBZzZ3UZzqxMTpbBdBeEgfh8KzyuTFZhZf5rAbq4PpbzVpijYogKfCuik171MYFbNrrZvPSe47Ug3VBHK",
  "key17": "3YvXcvT6F1J3A3C1X24ieJSnyGcs52ZPff2PMaB9yPsnaPt7BCAUVEVmxFbAccHVLgXzaFCgZbkqxf2renH5Kufd",
  "key18": "3BoXifPGx1zKy2HLrz2P2KdCNMEZZPKw56cDon2UZaRCYF3BcyUvw7MWnzKWYY9hU1NNskH6NkBigijCodtLmWnL",
  "key19": "5JLePhToj7ixJQDbY9nRwwViuBRbkAaXi5fXaxaiGJsg1PW5An1QGanC1xTePpgtkdD9aA7hm5Pm7sVBZ8ADRhcV",
  "key20": "2bPWuCFdUYapZfMmAELz6DK3vLfjahddWWK467gUifZL2RSvBJbHGVE29ajibes9Azs21vhQkyPmN2grSYZjGKPo",
  "key21": "5v51dyoB7rgYiV5JKSKNVDpi1fKHLUeWv5dq8b9LLiJD95ejhfMA1HJriXsY9EVz21UikwiZjdvLj1CxSrU6xV5w",
  "key22": "2yFcdcjfcMatjzygbsEve8S3WX77BHf5oX5pzZaWHWxhEbuvrEtg5ZhzV382Yy4FnpNE6pYAJHkhM9VUrJTtTrzW",
  "key23": "4e5CLb5VtpYZVjPuCf8avmsK48WZCtr5GUBcS4FoYfWg2CDNfeHxuivx98kLpWn7b1My1Qo7eGVoLEhxuj4QPiZz",
  "key24": "4K4F2oKTgGDymXjUcXtg9azYJQwuKFaaXwK8Tbqjv3L2qqdF9dC7Kc4XNtWAH6wWCwvZVgRJfqfKMAoSsWtgDCbj",
  "key25": "2pZtCKmfgDwxKNdX42xBTSEKCBXgirquTp1f84RtxoTGksbfo7aWKMKqsHUidyAL9g6WHUviECFEzvjWRfEmA1t9",
  "key26": "3RVtjBhpeDZjamYHRsbbNi65ZMP6FQHBDTSRwAFBWrLyEtrDvvLdwkog7mmNFA9HErLCquV5tqYqdmGAzXpATo4m",
  "key27": "5ykyzfQLrNwoRKxvtNWzzW32tHreqMSaCD2TyKNzH1ENHnpLUeGJuMYGaqjS4UabjUENvjneJzTpPhYdByrEmroM",
  "key28": "4PSboRdPd7SKSosPbcY2DoD8fq55RSDqgcQTCm2bj4Bxaj5oH7gNh5ikzLjvayVHhmib6aTXRjjB3PKBQ7u83u5p",
  "key29": "58cTKh9EpzsJhPoC3Pa5mbGgCiFxpUoEwSRURGD5f6vStoTRHKef5phnzsjnBmnFQX7SKujp7Hw34pS9L5ijgQxK",
  "key30": "5WoJ1JGXEcwnitawGLwirBhrK67br89qzdn93bHgDSsFR8Se59HgM7iTXNWnwHs3nt2wpGUhF3avpJpoAGjsHuwh",
  "key31": "5KhDs1mjnZdKvgRYjWqWmDZj3tF2KVftaG4iAHF7CYR8QP6voEE5bJx2pjfXcZz6yAnDiKcYU6ch3g7N2fUoTFvi"
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
