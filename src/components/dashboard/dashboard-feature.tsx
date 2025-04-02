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
    "ZAc7FMv5jvpEaKyBxhKVw2RUKRqr8J5ErHgsxGgrPF1sBApdo4nEfng6M92AP3RF77aC7ZVBQWEsbvnoybdAKSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NMYV7owGX95Pg6ZrwkAByhVGWxvdAMHHKnUagxpAXCELrA5Fq7JporSKkak29HufmDnLzn33DTxGrFmDX7N8MKc",
  "key1": "4gwqmspJZu7WNJxurunJFDNrRBfRi63uyNfm7vFfFXf6oPoAoZhqP3RurYUrP8jtAcYbwVNihNFkKkjzdcMrNQsj",
  "key2": "DzkSo6vkTk4QS7tE7sXE8sz8TjVPB4zDi1BHm5QLcBzymuMzL9xQ9MA7j5pYBPmSgmSPDxjMi1kpipbXKp9qXAk",
  "key3": "4gTp2Fimc8i2heMTAH96uiXNtoRyxphMAhPUjjVpkZRp6q547Kr6hCfRagQxQVcNEZ3QjQSRo6et93ZwYC1yjPWB",
  "key4": "gX8JJycaTY5rr7GJC4amwVWykZ4bSLEJpDpqoW1jvctwDVX3g4P4rgAPrjf6TJC5o44tef2H3HySK1k2vmhtRtR",
  "key5": "2Th532NjD5kjiaDk17nLjdHjQE9VGc5LRvzTgkvo7ZWqz5uqUiYkc6m67SpmkEN1WVua21S9XMivArHPJjE7yNBr",
  "key6": "46xkbvNFhwRojiMgwZm46tJ1NN6XamadNhgK5jg9p94kpTE1g4EYtHxfxC6znujgcXBtqW5hxcUproqydJmSL9GU",
  "key7": "4yd8Uk37qDQRuQR86VxUy356JEJis4FLV2SvFaH1mTmQbpRr34ZpuTBUsYRw8gCVHRG4JNuva4K9QwrpSAW4javn",
  "key8": "2zekTV1iz8FY2LmWg4CQhXxkMm7LywCDwTt47cNDcMJqFacJ4GzArqZ367MSBghTpN3VHuyT1tsTFBZ23S1M9T5h",
  "key9": "5QzjsjKdTH9rACQJburNmm3Jaymbqjs4EgV4A7hjAXxWPFM6KQibFhp1H5u3ZwRSCmECx7M5RoQhW7hcgaSxrSw3",
  "key10": "GqhamvWjhe7dppgYwBiwBozxJ9Dh8gaUdZpuUN8vqR4WEzWWcun35gs1Zcv6XXKrSKoZd83a8ey8LLAqHPsZQm8",
  "key11": "5NzMU9CzZAR4PYKowy1GhjMDfqeoHUvb3xHyibZb6S9ofFUveA1pMdJf39Uo2HzBh13CV9ZEn1byjqPNdrEnhJ7E",
  "key12": "5uSyN9oSSiqufiebsKHY7EfgbwhhJ5YTAMCmkPUauJBy8KfMtTUYGJ7J8M6J132CAUr6d4seGmjp32qFsYVY8dny",
  "key13": "Pd9ixcXH9s4myZbYxbZQJrbn3zCpjhSGBcpJtgQniDfQ5f2eDRX9oQM1YVHBSMLjJ7skJosFhxfic9NiQ6P19Yj",
  "key14": "zxLdU23juNLvBWeYcK9SddNZxcV352Bg2btLcYLAs25KVgJWsKcU28ZUBDY2fR9ebPajgedGp3RWFZ4HJHZCNxp",
  "key15": "25CnJSJNdjLWJXBnFbm4d7EhG5Xxgci1ykcjTmRHmfJhgHb1URtFzbwvtVURteR1mHtrK4thpUT2sMxMQkW7k7HA",
  "key16": "228uRZ1Wp1kAh8JKjmfMAbdeFuqJRFbrbNgaENuJmFLEaTP5kmEsagto6si8fBYVw2ysZ3NarWZdkHdNsduT9Tac",
  "key17": "2MN7bgC6soiveT8zLTZgQ29CDDgiw6spQEE1v1k2RZpi6hi6KgamSN8LR38AXKq4w5aXbA2LeAnxqjJkLGHeqTKj",
  "key18": "4akMy1NJoDPV6qPQ79spPnhE3QkP6zJwKrEtrDBF9A4T2G6euQJNDrPVygXLJKwynwbnJJKzJBw7XLVvKA1dzr1Z",
  "key19": "53wudJSoNVCXAPAC3csh2oFjuUFPSEBo6rayG6N35z4FPYRmhKwYBR3txraDqJbr4CZ8dNraqkgDj336JVp3GbkD",
  "key20": "5rEMKHT2jGaCLPznkjsZhiF87dqYqy3U2yh5TGSa4ZHgennTtZy8r9iVcKxju24VUReeRx5iQEJrG1Ja4JQn9otQ",
  "key21": "3sBUTj3Kw77gaN2pYdMZcocmEucTRB58aC3RriHA1s55rJsuEdB4BVDyxQks85vQqxXnXSBkUY6D4JVVTdsYv1CB",
  "key22": "2GochRPnQazHMdW2KyAAZKYeURn3MoXt7EdNgjCpWEA6FJRpBDz7HDUFLtnoxyGAataEiquMYHVKHTMC15xVLcLk",
  "key23": "2VeQkrXRHXGajihcZhWaiuawYuwh7BhS6RmsuA2dZNz4HSdBrZeXS5DLa6dZabQR775Bzefu4u52fTpLSoeBadQN",
  "key24": "GaP7M8YEoWfHHQ7YREoBnsNcCsbUYtvBVpzKKYo7rB2sbYn2ME1PcGUnmZUJ7Vomo9zvA6jofMDT2go63k7c6bq",
  "key25": "3M3zpA3XBhKoJ1KZ1d1h4Z3g3rUFxeVwcxdizdySv5Zc2JJyQh6UM3yxVkPRBCHor7oPbGPjeJ68PBcSQdiw5ZQn",
  "key26": "xB9AmPSkQkdvA5sVdRkDn2b1DHzAhdSQa8oSMd42ouTb7Q8AfetbKhcgCjsFPxxABzt7Nuyb7oR27CpPMHh9cvB",
  "key27": "4LMnbnDks8CNzYpgyAAxQiPw2mLdXXSWxCHZjynnK3Q4JFL8frt86Jgg5Hd5cY5LHax8A8wXqWGJb22AXidzPmFZ",
  "key28": "2FUR2BkVs48wVNPxSToh9v5u3fwwgELKpaxFYGzdG7sM7h39wT5cUtHt1CqaZVEGRTLSi1sjtJ9GQew9su6HbHwL",
  "key29": "qGYpyBRtiJs6whoqCheTML9WoYyGq8r1KiGEze2e7GPsJ7GFgYhkdwSrdG36xLgxmd9HspKj9US2vYdEMcefvzQ",
  "key30": "5YAHvGeoZbYpGtudgt1ME2x9MNvSSoVG2kcfkx4HtDQwJMPdB9hnBi48e8KKdnPYr2QyjVJuejZmcY5BoAEexv4R"
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
