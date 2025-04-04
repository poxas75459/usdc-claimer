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
    "2SmFGWh3z9YG8PBEzHcT38scWsj6ZuJiRWEe7b3TPRVb3HpgCK1SYcD7x1e1GNvPKdYtcn9UXNnqzz3DGPDDYzJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ex3G9xqRBLTrggoFjyS83mqaBcY7Guh2jzosbenq7Ny2jDkH895uaKTRrWKhdokYYvEuhgJ4StfTELhJHC131FE",
  "key1": "5kAkA6J8TBCR2FgN3iQuHD88FqY1VAE3R81e5muNLcffJCyrRPKsspXkCRHPocRxLcc1zC6i9DQaciwT6jc8LP5q",
  "key2": "3WDVeTT6w85mN2rXnsJhrKvRvpjUhJUbzf7c56Hz2K7yjhzu72jdrvz8MuyRBgxT57LiAaw1n61U1AST4nZVhbQV",
  "key3": "hK5nEzsdLk82PcqDRx2S36YDWMuCjbpPnq6KZMPzSjFiGzbjL1DfiXuc3WLAsDami3gESXiVjMwGEymi5ohPmxi",
  "key4": "5mQzyLSf1KCYWLJCi7fdQAVs3oMg2tbGb1wVqQhoD2jHXzfT44rhHRNdNg6DEu4Ucp5RJLeC7XgPBzp6g4kXnwTN",
  "key5": "nzfZibzcfUwBiDYb1P5e2zMLBNsw4CyDAdBKQJJqzQupfC21aQdy4Y2e1AFxJmq2B2vGdr1QYWENEyJU53F9ybr",
  "key6": "5xKHmFbLRYtx21xytubz6FDWTMkMRsQ2trKx8LhgjJLKwsyR5jzmVWSNFhyrgvR1kHbf9wuoass7VcqqrvqWMYg",
  "key7": "47Fiio5hB8NV1KVgJHmKyBEDK6tqWNTWGvT8EQ43WFtAA3hv59Ec3UQWpwuaXQWjNcZEt3Pa4hwxw9x8S9M7hGVD",
  "key8": "39gV7yo389mq9g85wRjFB3EomGiZ4dmWkdPw5RzpYqFHxYGyiw94fDNQ8StGsXuThTsK9FB7qc8UV9MmKpsLUNaP",
  "key9": "2oCoEHkW8Ms6rN8eQmPimrGMWxVSSP2NjoEmVVMG4dRj33F4vYVrzGtBRUkdqExPZHMQKbVFLKaVXcU1P94YPRea",
  "key10": "3HjiBNKuNn29MyXcTHg7W9yLFWWXzhdL2hAGBh8nYzSyYxJMGQUrZXtWGZV7cpH5E5uAiQQ6HUev1E4Bt3vqJRRB",
  "key11": "3ycdBFFfxr1YA2UMCXezf6r4mLK2vSM2VRjRFkdrcsJv9xk4McyNzjiTv8xznczF7SvtMWLBBoYAjEiyjgURTSyk",
  "key12": "C2bbbm6V59v333NxzThxaxqaDyVSpxgh2UjFposvZe2Bi2ocPZ7NXTUXj5qshcbfhS8ap4Ba6irCFTCf2gHxF8w",
  "key13": "3X4GqmwnXYf3FF89ZErR6b1PuiDX5UNiNTvuNwaNKpNxNewAFZqiSnPANCpnJX6DKvQzEbm6YdAwTqadDUWWzYkv",
  "key14": "5CPEqTzfRa7jZaZBYTeab7tcoU18VBpM5w5oLphV8gNZPaZCNex4KxNxyUEvimt6JXTk7EWb1ySTLs8jpW394j37",
  "key15": "2YWpn6VudnbMJRFyinmf8UZZxPRMQVpKW8xssoDxKKiMJv8sW5bAk7rkpT7fZt2AyHgmTRCJ8shJHd2v4N8oofFY",
  "key16": "5sGw6ZJyt8cdtTvBsX2aLJJ8kShEChJok9j8RtJ7FaRLFPBQ8PCbBvXG99BqknwAZGZNr82PV2vGbkppi9viCdTN",
  "key17": "2WVNsNsFE1C5rVXnf1vBvKbAR1STvYkxQ9bWN1tfUeVSJeDUAEip2RRMpMAKpURkRhQgrR3Bh92Su5GXazqgoWDt",
  "key18": "3HbTX33xbmvYdK8LD8ASTs7YCfMRWtyjxQ4pbSEEaAvtJAUrFLKm3Gf24MnkTDiZMuTgXgPi6BJM7eoKY2KSAuaY",
  "key19": "55qzGbm774yFwQxuDZudA41twU5xtVWo2tE83vn56dfD5YWFKbP1T9Qq1Gq3DjH3tmtENZ9rUvTeEPtUR1eNxETS",
  "key20": "3xf4vjx1kAdKHgLXHQxJUP6a9rcFvcCDc9YjBzCQqiiDNjnWscF4Bk8wBaT8afGkjdstbnH2t7oafHKjVNw4EMi1",
  "key21": "2ktPUcSviXEkaEGioW7c487WEk13BEXoiR6dk1MmGvh7ce5UYpMAhnYntoyt2bUicgv45hNzPbn2UCit5qWskQUw",
  "key22": "5S6JKxMG7ZK7PQWnmD9Aw1iuC3M4GKFayWGwrcnLkJGYnkgiqCV34sXJtGceEokWdmkBk4kDT9B6jPNmPVvXGx74",
  "key23": "4RpPJHvsorRNCZuE9JZFpPdCoTx2dJwKqGXg6KJR31fodP6GX9v3gwxKEbrcLUBWFZHrAjBcaadgW8vcMo8ShEV6",
  "key24": "5Fon5dRvqiUayZvbjdQgF3DPLYs43CUgKgQvh5jdPA7dL3hwLQFuySagk6EKQMZhR6AzEC68MhMRejwX99mp6Sot",
  "key25": "3RZFndqzTSZ5eXeaG9RJVGo1EuahWh48DDX62zZGDhFZDkLosJ4cTEwPtMVQQvzfQC7NtmEsqQWoANbwhUmbNXPG",
  "key26": "3KD1pycuS1u8GY3175t2DUi4gjpdvn3G5r6xiVXKfxTnrvjSWQj3g9tJzJEbThcMx9v3CEUMS9yTT25PYDdmG52c",
  "key27": "2MbZft1fjRcjoHiWWhzDyjb29uJ2AU9C6CoRDQP12F5Ajv6XbrfGFxmmUDrv46wD6kw8pCbwQEKd2rxH9od65LgC",
  "key28": "4LNJgCAyH3qg9Pdu6E14FFbGjSY2aDdCEfrt5xj1u7Y5oEooc3PiCVWYpyomsiGjfswj6xi4Xtx4ozzahMrs6vTb"
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
