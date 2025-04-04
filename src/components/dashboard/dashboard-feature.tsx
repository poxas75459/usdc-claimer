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
    "5dCerPeRwjijpuKRsbnHwRDumE7E3qjTyJU39oZZMEaxyMPBZ7eeijj4wJwGCALXzVbu3eqn7iqFmefYZoNFAq6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31973PdR6L9KowhCZGLSZfdgUnexS7THcxmyYRoRx8SzvgQ4UBTbHn845PbdesFxcYzhbAm9tAGQr3DiqA6uMosH",
  "key1": "5tPyifshvD9V5YkuRzdtu7LsP2Ahs2TfNeUBYCEm8mMpiv7HkSCvy9bBf2X39v2n9ZN4pi6r2wKPgDRaPphPtwjM",
  "key2": "idcGfDtS53zodNtWcegqmUYXEKHYvmiHyUZDmvag8MHfxDXCoPKMdZg2e2y4UgnAS5d9KJZ5QqbWHKNrqDdCFQv",
  "key3": "5AzYcAMURdrTrdAM8Foo7UE13kYTBEQdFR5t9ZwoNGCKKN1rHHEGUrKAZFkzVq39Qx5vrbppPbtpfyyAmmzemBxb",
  "key4": "3bzbmyNUGNkhp39kYagXVQos6pkCzy4iaTbzvnvHX1KTv7gX7pwMek19o5sPhWcUa5sJvAkHWupmvmrTekT77csK",
  "key5": "2XzXNJoMp85DpyCGQYbvi1aZ6JFbCHNrT17sQ2LKWs4KAZnjmzAkJc9fyyAU4hQNWfZytu7MQhNanSc3kD3RWUne",
  "key6": "39vWHWZw3durtYykDwrbrcNa5imS5sez6Ajc4jEs7AoPKCq7jfzxd9FJy5fXgTXootcLNmJaMbzAgGHKjxNjFfEz",
  "key7": "2dJVHQNz5dcM2bGa8r9vkUMTKX9eutUddcU6xdAATvsUUzUdiTnjQG7M3hmq1deU2jLYBQG7tk4j3eaVnLyd3EHv",
  "key8": "4mQd45inNptnzS9vWoen2Ns126q9MGrpqVVcqJ7yA4uhTXzBfhVmAHXNi66xomQGpoRKDUqn4qGb1Lcs9cdeRmFH",
  "key9": "brDs3hmTjEkqpDS2h5o7Rj4KNgftEgBpXkW72F6CjkXdEu5ftY4moDNRhsn7YsYJ4c5fpJyJYE28TdSRhBQegFv",
  "key10": "5XagpZY5uMiX9PmEtUay9xrnCy6X1zSGUGw6Rhr72TbfBuzeG4ujCFtGbGFdcUKJLb9B1dvZ9i6jzJm95br24kYb",
  "key11": "3Ez8agJJXWNHCV6S69ch74fvwoHbwzz3KUpAeFhMAsoAdYJRsiLqDMYTXsdXzGx554wfUra3wePZLfygJsaMSFM5",
  "key12": "v6yQqVWgBQiBLK9QH2boCYMv8sDZghGjmCWaPqjoGSJviYasEUA6ZedfkvMB6YGDrnYLySb3cAcRQ3YgUjVxkXM",
  "key13": "5qZqAULTBwgssCKoypMfJwFD1gqQvqpsNCGpfMv8vBfqbYUHtiyno3L1J1fsxG9MypurQqicr2KGSaNV82XuSBEm",
  "key14": "KnryXFWXd5wSshCLpm7YMUCYzwS9WfWEa2cbcCF1H3zKTTomJgsRLrJ4X591LLPhJN61niTcKVMef9S63Jor89t",
  "key15": "2hP4UHcT9H6hGtuW7hBSr7RZM8q3EBfkMxQNLWGyf3vDAeKr5iPn7xo4uAsXUZNcDcRV2voHzvv1fqyv3zDDBw6",
  "key16": "4JbtovVfA3qMtQBynVnbxv6i2P3D2XKuLFC4oQ162WT7LLX6T14cPZrfdtZbPzQDdJY3aad6cDZhzi6XiJJcngnr",
  "key17": "4A56ycCF5rX2tkH3YQ7TxrFq7DADdi5rbsBL7oNxrm4S9WZUiv1nkM1pe2zDDu8n64PQcahYyXt7RGbN7wVUv9Pp",
  "key18": "CsFhJSht1xUMpzv9k8CM2stcd1qTxkrckCgMDix4MTJQ9J49ThRS4dyokSQi77RGLK4s3zcjZVHRkjkuAJgfGAJ",
  "key19": "42peNs62hVvkNWuY5eyXu6hEr4GgEZ6jrJVevPJn9rBuUf1MgK3XQWRaFC7bbPHxGzbSVQtvoe624b8rQ9Cnh8SM",
  "key20": "2n7bhL6AFgKivuLoq3Pwqx8w5b5E4auwBMxuTZvJrVNHaucn35QZCPmFgVFPzPLb9xv7YzJTCJ1LUuxRdSUZgth1",
  "key21": "3C8q3dtQzyVnbkzVCvYkZv1EWKrD4dj8FRU1qPBonUBrihKKxrVC6MsiR8gDufWk4pwaQcEQQDTSxetMgYff184v",
  "key22": "3gR6Fvmf7Sq4F7kKAduFdZMCWdBCkcPX6FmcULUEDSVvLHtGz3wSuHiKSjfq4yPVUSR3bsSndmSNUJjBzyUpHpnn",
  "key23": "3swmJdh8dJo8DFcRPwBRjWSzq1wLfBiBADXWCCAQdcCvXEip845Lzq7huareQzRkcf8f6e578XLTnLVTEmWuM9jT",
  "key24": "n7jj3BLs3qs7Atj58EZhXs534VHid4zHz3eQqSHqaMpkuEhch8QQs9abiLPkoeG7Z1RCzihWTwAdXQyHxUQkkAc",
  "key25": "4NHZTsUHhrdv4Eac4FcMVyQ5vyPUH21WUkaP9fFd1bdLh5zY3huWRSWrKEenGK381u1ZuycrYuc6PUHKE7ZyDA27",
  "key26": "2gYK2JhNYf4KjxxVJArwZzAYfaB6Zykk4PLVBQkJ5bfvwYJP9cTx1E6Twzckw4pUWcF3aqE6fbcmUdaJJv2zXKex",
  "key27": "XBxoZQ5ujJqtobjjo49Xs31Kuo2Qatcq1XzdBuSdWsBCAytC31jVofMejowBuBhVkw8Vhu9Yq2ryR6biodkd14z",
  "key28": "2fGozTJXzikvbQJrynDv5MjFxknRKsQijodXhaMHseV8WzmjU1tkQMCdYvZar6nh5MFyQfYctZKmufDaM8p7PMTg",
  "key29": "3xNxgFudzx9tAJif8ETVaCkm4vMVYyRRHDmnDCW9fC1B7zYLqa5kEufkrZfXBnokpCiBF1W1k7CViup7antSsf4M",
  "key30": "3isunWyQP38DYVmjXoC1xeKVyYtqrKCsa2J6vBoqspmT79JnfXS2uPxCMMr38EwvK49BBH8iRj3UUtn6bh4RkX3N",
  "key31": "2B49afVgQrdabF6Y8eFe2LdygHN4RNL7GpZ7WereFK2ZUEDKTUVyuqecm3NKj4HjGhP39FcNnoL1CKmYgB1JbsGS",
  "key32": "4a68Nvtqy7ivBQCitvihGt1H3KgHU11v5BgnvNFBhoEmTor61tpnK8CaUp65hXAsHrT3yJuN37WcKGCX7abFPvet",
  "key33": "26Ej6xEVbA9Sdz6jQVfAGHfW1zmk3oKE3FqLNTnCmrX2NwG5u6MMYfjJLjtnjXPbDDtGAV4k7SMTmtGSn6JS8sT7",
  "key34": "2YapLR74gCN2TrBKAiYJ5B6d3tyb7wotxgKVqVKyxnJghJ3qKkym18ikCwooRwKuEV6nvFZiNbWFxkuKssoFL4Lv"
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
