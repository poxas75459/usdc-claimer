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
    "vDguEcZhXwSqjrK9s7LpYAVbJaeioFKS921No3p6AC8q3Z7H3qoHbgE5NiS1TbyQAH56HT8wmLeouYMRNX3RUuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DWjpm73nHcQyDosPBaDygQig5hA6AGz9XFhNheVA1bcmkFR5DCsYYq4ki1MKJPGyY6zShLV9CzmvuvJGM5outzP",
  "key1": "2wTc1quX2Rb4Da8gSornqhtqsXn7NLNaCbVGGCwcyDkQq1y4ua74PhnoRxkvbKdRpRNfzJUokF8aFM8SQJiBSJLD",
  "key2": "2znfXTBtbja2hJDG9wmU2EXyeezrrSBjfhkwMyCQDgJdGceFHH1uzvhFpfgzMkoPvgymFVytf1SqPWCDhj9fT93Q",
  "key3": "4CeXfkhBUXXXa8C1mEsWTkhqiyaq9YKsQPL9aUbMSULy8Tv3bmUY7GpxEbzJ2CNXCTRqxMk3QeGKp6oAPx2d1vS4",
  "key4": "dzpTTNeeXHWmmVymwRuC5YEhpEVBbvgzNPAanq2pptdNNJgbrLsJ5Xyk28wcdD9mGgH4finPD837M5fVbr7FVTz",
  "key5": "26bSYuLqZAzHZ3NzttBRQ3gbdwyxNc7wY64jSui2opqGuJwr1fLcQtsYyZSWXDJCLp84YGHCKswMcRkU9uNJf8KG",
  "key6": "SMM3662JbsR7qSDbTHLAXEooUmcwS4zi1HEKrv8CbQhLad4YBLRYLJaStW7Wkbn8c9W835v832X3t4pmjGsQtdt",
  "key7": "5ujm649f9ZpHbezfFhrvCFjXrRXDFEQaELAGdH2WMX5dao7E1fx5uauhuXEjzQHv8Mnik876X2EuC48MCpRoKPj",
  "key8": "3wHexdL5t3dbghDLDTsKNzYXtMugKH1EsC7FbBU1LTx4aYk3EpiEPptj77DW3pEANJktbEpa32ASNTE9ZQYScFoU",
  "key9": "4VPfYnavPZ7yhaVzte1nD6TSEL9ur8TYKHm4VyXVtAZgmgoPpBg8GFEZXHMcN37NM8cZn1JnS2hHKPsSw8QNGzY8",
  "key10": "4yz2bUYjsHMPi379iii7hyaEfEbY3omBjapCfPgoVdmUyTzCqCLXZeMCbwb5X3vqE5NPArFgfvxN3ikUH1KWd6rr",
  "key11": "Dx9GzcXJaCogVP1GnjSFdftb7wSrYi8v3WS1zs2oTvbhjZsZd5tn4tLnvkbT7QZVYunxXH3HnmvydDrjMMxiBSB",
  "key12": "2p5V9LDmBypjvokehQcHdku4g8GrperHMz5LiAkmp8j5Y4wdhL7boC9H9jQpewZKqTjgTReXkavg6S6ih7Dq4fdU",
  "key13": "5e1moF3LJXkZeryre3fo16Zc5oni5WMFc9h4DBFUjkQR5czwAciWtAqA5x4Hho9xhx44DYHjbdGpQj378SPfHH9A",
  "key14": "3TJfN49attEKRyHRMXG5YmtcdgULmdM5Y65xhx6hXeKasbMvB9kLsRceBwzEFPmM4hCfvSNMZHojrPw2uZcmfoxq",
  "key15": "4R8BgKiSP8aUesyvR46GoJTwwzzb84HdZKTgdbuSswefkstcac7qxGdvy1iDUhXbyr2EuDzGbDrnUK3LQAWqtaqZ",
  "key16": "2UaWR1YBGqndxTLMTtpSwgZBJGFqt53dBPbunvMgTtC68ULQtEqdGySz6gosPvTWpyGrpAnd9LZ6KwLttDzvkGUP",
  "key17": "4dM6WSQtzndhhoB8L19YQKZim3wGVjgBQYcVkHeyjrhJSK9psrZnL4eUXLvHDD9q4p8HwgAfPefY5QiXEm8ZrGnV",
  "key18": "5m1dB7eJU6pHQhhq3nHVMNgQ5GEWJUU5QcX4hPcaDuNn2M7Ppr9KRRjc8w7dqa5K3XYjmKk2mhibFutiWVp3uwkB",
  "key19": "yUZZY42AF2rphBFuCEybg1xjABbE8yib2URK3fXQHVEBxUGJbs1Z8o75zvvNTAZDMXtrD4vMViXe6pBUn3hBNhV",
  "key20": "2M8U3p9g3DoWr1eFE7ZKYsvXzkFvrxY22gaHEFDzVtLJAxtpUiQ1rp9Sk2KtsjjgZen3zAfjfXhT1thVqwrU9wxL",
  "key21": "4sEYthreX3mERvM7YSGJPQySe6E8Xcmcj82GUFDzLGp9BgLQujAvFeENoaBf1RkdCbz35FB9nhi4SRgVwj5nvPNh",
  "key22": "5zr5WP1QePrpfJsi8Nwhct7Zz3xCSjaPdxN343fg7WPVw6ZyC1KxmakthcSXdCsiDwmTDgYJTpoRpDykT8jRENM1",
  "key23": "AEuCi7VmWhhjKaqxUxpZuKrBJAfnutGobhxweFm3m7tHrZVqX6eZrJTXmRawJeFFNr2Ai8iTo6zEHHpsXfiaMz5",
  "key24": "9dMXntzcTreFEcNAxFAZYcRkkSoaCyr7TQvDdVzbuuMKvjbLHbryK11Tzidp1JMT2z5N9yHfzGNdE5Ljd3Gg5aQ",
  "key25": "48UzL1RCiaUDtnjP8s2tKBPQb62gAMaKA6PL9E9GMKMG4hum1LdPB4SNHEmiZpWRozgnRUdeFwsL83fk9ASu5RhZ"
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
