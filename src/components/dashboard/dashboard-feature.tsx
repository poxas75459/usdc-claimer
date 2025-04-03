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
    "3KztDJHLH1LRdTe8m7dgJvohRni9hC6Hju3Nyvkmo76QRVU6giYZGn2UgBjBt7RZ1kDeLTL5oTKh9XauDutDsSGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34sMSiTRN93acW6MaoJN3tJHSiuDLWiMjzAttUERWpEJqgH3kjaLTyc8n9LwaZ9sojT1dTg5JwMaofA4NgFdwQ9N",
  "key1": "5HyMSf7gX9aaJuz6CEG28fc5ejw8VQG4tC4sRhhrkkDubBUa75psituuvFXpHs7y45RskeDHjRrxGdxzAwUskhh1",
  "key2": "2d7dzB4qcTg9rFhgxZL8tAAm7z2r8DwFsEmt6wYm9AzVM4QY75yZ48WgnekAj1CfBNpZDHamVvF8jdPdykXtnZ5F",
  "key3": "2d4rALr3mpYsRYdj6CbRqXaoLLXezCkqUCWgSmvCggC1oug3Y3J4sKMUrF9d5b93TeViHT8YNauvFGxYe55FJXRe",
  "key4": "3e5e7G5fJ5WSNWeS9aqzuugam1aK8o9sNWfMosVDm2yHvfxisHJF84ELUS7NhsPsZjFnevA8MSLgeywtGAbPRo8P",
  "key5": "MGgNpihebnLFoDrwzUL2Y6NtFK8nP8Y17RYW3Azq5ezwZxHAwM26R2DK2CJ1C75R3NEXF1mazAShSmyAuM3Y68c",
  "key6": "5uhy49T3jZAfrun2FaFybkzH5gZBy3uFtmHd5aLqdjFwqNWkZ3jzQRRgamEbUBAASHmTY7SJxd92UMT9gAZA6UAZ",
  "key7": "2b7xVJRiMJjdFkuF35PuxAXMteamt7KxbPhRD4kMJgTpL4dVLMfXBrECX8RPaeis1eRQkeVVTqU2sdjw91xkaTNV",
  "key8": "66edGBknENnk5T3bKLBY6FHLYrP45geeTZRy8yRTeYJj75GBMXBXEmH8v84DMhkz88AGkHPhqUm3z1Yf36UPRsoM",
  "key9": "27DaD34m29NkxoSpdtjrLpyGjKgomXVsPuH4RsTngCLfUjVf2E39WDJybfqP8gi8BZXkzBf4UumrzN5CHxorthfM",
  "key10": "5HNKVKBJZQ64G1dLJsoEzzG5dazZfi3QkUXjqEN6pEZMLkeu6kysUQkedfGg18QGZTt9DMonVLbrvqQkV6LaGdLd",
  "key11": "wiQv7M84BENLakYY85vrCvzzSvicR3Wgv5BurHp314qccHQB3zzfJ6UAniPsSAKQHefZjxTZ1s1mZP9dX1jgYFg",
  "key12": "4bvGq5Pd8TKcmUANDEx31XgeJC5aHtwGEsTXFv8QZjorRbmZ5c4FNiRKXRbhX59sZKu7ehjJ82rbHvDxQWWr1rB3",
  "key13": "rnEsDKc5wvsvdUwvMoReyChQ2LesQ4Hxqe4JrUh2NLWXFBN6tjZqQ5StuHJ6GPi2hcLN7wxMoufVzaWGdKRETuG",
  "key14": "4YERra6hJdEzBuSK1gKQvq8ENcEUGFxzfqWdzSFjX326WQRvAfncAWaqc9iRESTjEykzGkNB38uKxL8vZBVMYYik",
  "key15": "DgDDDtt9SLpVu2EPZyayeaSCSkG97kSaeinzsBxR5BX5vt2otLJLHcpBhz1FQTKyte577kpcotMN6DRw9cYEhhK",
  "key16": "GXEuqWJP7gj3SX16ozKjzt55fdCt7uBwEDPw8h5S1MmrcKfqDCESCLNgzGr7ng755hPcEKkPcVtzWz3hKnoVbv1",
  "key17": "4Q5BiprQasPn8BDUj9mdHzioVAa4TLkgEi23CDt5yZZ1uxmUo8BN9qFZz5zr9dkyFiDwBGAkbKxTkag76Eu7TbNv",
  "key18": "67SX3gFGjnU5S5KyAjGunmhFVbncUt82RDQhffEKo6RgxpoaztGjfgt7dmwtZov4pyfkWB4PEuXmDiDZuGYRB2wa",
  "key19": "4KPm1jZbR1tCoeReMeTNYJGzampPLMh4G3G9hb24RfoVyv3nfpVoDPx4JQfXKwvUMXywv1jqM4bsaNt34RBn1M2d",
  "key20": "Vte6DpnxxHfWyULqRoe68yyDihcLM9ULXfKdrEX6JW3sLRRgxau9V1qBDqntdPfAbe9c3XqVjnQh1KFYvJTSeng",
  "key21": "zzhTB3pJC1CmLkXVihS6Yeey9qrEzYTP4Xj7nNSmmRtA3JTxWceRZ62u2j17uMQDvrkr8Tjso6xP3D21idkW8oX",
  "key22": "29ms3qhx5KRYHuvxoX5Cq4L59iQLYVVpY7bUd9Gg7MsS4keaJmqVoUYbWUtDyLgvmAqax5QYyBbGWDMe854DKCYD",
  "key23": "2SguVKHCfsRam44TXEfSWxgVkmerhw3aDELXNDPVKhqi8ukb9KnmdhdVqEyfjFHktFtLy7ivEtqtPrckVSRrcC2i",
  "key24": "4M9MG1wb495vfLEsm5c4Zr3KKPsxoHLtEjVTbP88VdAWf3EPytsFfCb4XgM44Ko5dqbqjxE1bzUs2kh7JvRrDACY",
  "key25": "pBrywHzCzuKMrWxkBGHEEoguc59HgKEvwWWLf613gVCULfqsSFx5ibDoPjmRPpyUDWUkVHj74JFbygihTY9eZvm",
  "key26": "5hRcxpJiXmNCdARZdn1PX8HK98nrSbVtZSEgpmFBgb8Q1raGdxkekERrPbxDtwTQc4Qegp1RWKbQK1nHYfhhP1Et",
  "key27": "4k2X2AgX5KL6RgJGNDMuKpsy3CAiXhaVMnitHhVyAfpWCt5No3dpNTBvuW38uaxvRepCgprhuGc2Pu65RRqBQPoR"
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
