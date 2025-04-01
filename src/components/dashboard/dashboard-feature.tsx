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
    "5SUs1t3uuqbomd9ueVUD8CJGfXPFyepaj3N32MNqosUyvVv5DzNo5Kx4QQbvZLKeMUvpdyNj8eDk8pRQRUUiin3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hYnUKgp6jaZapksoSneh49z2feJiL2Zzsdb4YsyokTtDyCQCu7ZoDUtVmAWyP97xNiqGm38pdUfV4SKJnRphWEY",
  "key1": "5Z4nw1UNYVF3bzuhVBqRrY8QwRpaaUtpUKE9xrUfw57tqxAgjBH23mAmNMG7HJKvyhsRUx5m65DzkEKCzHdfcVy3",
  "key2": "4KywWEoP6zQN4KqGKB55sXqm53ity8PF9E4BduLzGZdaZJxj5M9voDDkf8Q4dTeebuKcBYkkV8RwSPh5g8xWYExg",
  "key3": "4e6wiMPh4ERDJtjC6StVTwDAHYgsjqAPXxjDa3yxYCshKrXLxHCFNzWnkj4qpmornZczdu1PAo4dUPtFzA5jPTB4",
  "key4": "5vbSsrSGUt3mz9uYAiRxmfrvNyPJUY4KKTqbGkiWKp6fEdjausfvCV7B83geSKs9MT9kMSyE6EizFV4P1yVQVsYC",
  "key5": "XJfoYNzSojRN9Wg3PJwVoSk1XKs2r7gk2c6Tad6zR29YWbGZPCEy3g3GtLArdSTZpLHa1sQ8MRyWxjDDrKNZf7e",
  "key6": "4erxX2rmis2iKYk9LMHLBLkxzESMEMfutxLKwYSMYDUeBYas3b7SrM2KM1eqUaxHDUpmBgbC9Gt1iZGJniArWRVr",
  "key7": "5prwiL2cXMamsFM71FkkhhzBjR8FFGjr3tWVhE2Cq3vnanPE9CJMkKu8JMfrYQXiJPThXBntBEZfyE7c7Qg7Jqvi",
  "key8": "2k6ZxNM5G2B747r67gAbonan3aG8MJwsY3H4bS2XRGGEjtPdGWUKgqiaPxCYzCsmpGdYLSwdzk1wBeREdgzFZUpt",
  "key9": "4VGsDGvApd1QbNZfKMGDMEfk8oSJGRqjeeeCYYYTuncrH8yiQrPDkb27xGFQ121WHVVoScJxMkyGZECZTPKLKZ9T",
  "key10": "ic5jNReEtfPiRJXaKS5sRozUouPrqqQeoyTf1897wACzjAd9kG3yj5L2C4hFHmGpPdhMA34UHSKQ2Qy6aPAHBRB",
  "key11": "4K4nuUcBF53f79QX3Bn2SvFQZ2dxQVzxn4FYgUrkg5ipB1vczA5yEVR6ecXx4j2CFCHe24dYTXKNdjzqUQKfLLxY",
  "key12": "WwSFxuciKQNdEfAud5X9kusMvPtR6ivuhnGuKLda5GrjpfUUEL9tU9SJKiQJReSCo3qjzy32h8Z7AFJoQuGz6yg",
  "key13": "4TcJFBbkeAVfiCbMn5MrYgimQYQEwPB69eCX4VH5QSxMQf3hTLtxD7E9mDCzQ6qhxNk1dpfdynwXVAWKwNXwRsMn",
  "key14": "2go4YBjCHen3yxuVj4fJEjTbZkiVy1DmExMVSZhmPD1S72Ve6oCCZS5ww5kFdQ42Qz1TjpfYooCFWQSRARP1zVGu",
  "key15": "2DDoKqoQsftUfFmTmxobxAQpwhuFwya6jr2LHj2NfF6eUMgyFR35yjuYEEFrsatYR6SH8iYctEzZFJk1aFxsbQkb",
  "key16": "4F4foSffCCGkqVNHP9Bwq4S69F8RjByhiVf3DiwVpUGfcF8TSXqvjdJgzHfg35KMaJrJpfXjGL3uTvSznixZbxHg",
  "key17": "4PLn9HZVD7AcNy2eRuUDoEC4UQUn1QhoKN6tFWoFMxrL7nkinqdZE3JRbiN7TgZWKXCPvX6gvj7zaATXGpraK6Gh",
  "key18": "3mkWo5md72YE71YzNLLj1dJhpYJyY8aoyC5uGN8DNX1zWDZTm5jT2THt9aQcuYRrWDk2CwHaPBr6TpAHHsC31yUV",
  "key19": "2Wn7mH2bdbtjoHBHwHgh9No9VwV2ak7xqAmFjodYdho613qhZcfm2HH3BtS6eLyaAHngjvahVm1GvCQV79AsNf5E",
  "key20": "4ho5zPNUc6TkRfC6mggnVqAdyUc7iBrffDvjrFfxNeh9SUcetbABKxMPAHsGzNnZrnqPZ8dE4SFTF5eFpUMCF1fW",
  "key21": "2fJSctGM7g4fHotVgJsxd4Kr8pHL6dxVg81mroWcMYvBeJih9JCV3YbT59oqjYmsGFSfCavJVnSFkuwMxDq86W5",
  "key22": "46aPdTWCtbsjnLoWdzAffzpVENRRRiz9yvVn2DJjvFqyoVwifmzv4sMLnW78eHUQM4vYbEvG9PPkJnXKFxk3TXXm",
  "key23": "2woMsyA5aePe3NRgxhd8YadA5wZNhMh7guAdtZFLFt2tPQ1yg5n9boWx9jwnkGYniA8bdSY8etQwSCntfCpnnem5",
  "key24": "3Cd6eMEDZ3MFrmm1kKCfEdpnqZxcBnBf1tQGrmNZ9WPGiBz1Zf2afqGwLu2X8MejYLSypoTMXmghsoWMMwnGeBJT"
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
