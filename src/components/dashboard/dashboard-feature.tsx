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
    "34eFm6kAxjwVb6oKEZAzsqA1VWjW1vS8Xh7LuSL8nUWw5uAGDAJ6oa3hmB3uFUmd5uGxvy7ABw6q9PE4VNDNVcot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JYatx9SudxryoFCWRpVz1EtuA5CaS3MTUFTohbyaibyz88FvaEmgVKSEgz2ZNaR7VqgFdBsyWtcvZnGY7xAXmBX",
  "key1": "4zDPWKNNNyTYgHs1hUUwuihCzLqu1q6nCsUBzjYC8yh6uYMivBfUVPSm8wQZ3dLkssMLo5gydy6GhujvWAMRfmQx",
  "key2": "B3fcaAxrt3g8kvspEvtCfwAwRG34NCGHXdyhKA6DMubJ8225KtGaHyFg9Fmgt136gCoyNCxWCbRWEsaYPUWg9mW",
  "key3": "ZcBZRfLTc4ao27AbpLpR7WyP282Z3vrK5XaA5bss7xd9mtshcwtzQUzURUnTS9rpFbskz7hZfWjpavMdJ7eMuSu",
  "key4": "2qCCmBpYrd6iE5TWo9CnPv1SvvPwzhQ169Q4XhhkuFGcnBoFtCBLFd1W7Y2SQwJh9nCCkGwkTYCd1X8rVNc66Qhf",
  "key5": "2zz5MsXyS6kFcD33j5ER8L3YF5Uw4yUyJ35ve9mnXViPp1vBSQNKrpA1Sjjkd3v2MjbNFLVDQkdSbmPU1JHVikx3",
  "key6": "qojG5p7q39tjXfVqwhEN3i5BR4ZmzNDK17Px43pekhYAz87Fj843hQig8LTxUZystnh2jYTqdKsbPiDwi1c5pK4",
  "key7": "56gzUqviyEVU2DDjUYESaraWUqfjcza9Zxo1wQcDEnc2Eqg7NAYi9b1YBvfiCRfFkAAon6Tf8UMp95YnJwm2creE",
  "key8": "3NtanaaghfX1HCpTV75RYsdG4Gbytjy6i3fsiFcsA4x2bD91Kc2saC8s1TMiNagM4KNXM1wU9rTRztuoopr1KNmk",
  "key9": "3pbTU3dxJ7iFofAydXPxMcT7PNQT4HuzmtGXT7VojiJQcYtLQxmP4ZUU2A2dMdhq7RAKv6vHFivR3oXhCvJWi4jj",
  "key10": "312pvSbUhFKdpYWRAwUHGfDWEYqnTUUPf1S5UuMQk6sWLxMG9bMwWwhZcLbMo2iGy1gDtj9G1yn8ipkX79b7U6j4",
  "key11": "tQdPS4hsG6xA6Mzi5nPY4QfFgac84cYSsYzYwrMZ5YNrW9RV4YnJJd6XUZGr4mbmkosjgwZscLdDqoL5tzBvXY8",
  "key12": "5oKeGHfsUYNt1xhdBVoKZKkbhe5ZyTdpfhLXwLkzzb2oG191AcsEbYVdZhYxfZjstxXDjFtkpPfVvdeAGSJDA1L1",
  "key13": "53zZL3pEh9Dee7r2ZfwyVigWV9JRKdSGtmWoJKphVTCfRhhPupoeJhRLX87LfxxQ3giPn2nosLQrTashvuypNMdW",
  "key14": "65AFn8Do7FDEgNPUReFYGHuA7T2bZeBQH6nQR37QtWT9Ke9zgfW8W15j2j2Xxc538LUxcfgUV2WKQtde68Y53woy",
  "key15": "pYjkf2LnXXijbnTYJ8FqXfGnYP5VBsXgiXYhmoyJYM5A8emE5oJMebengWk93Vh5gu28ySh38P4BTB54Wi3LEkD",
  "key16": "3Y1uMT6Spq4p3f8RWpj7XZV37jUyecPiJ6FTozSHYuH2uN4Vk5VR7LX3S8Vbbm1nhKxSbViiKFE7pj4gKKMaxT4R",
  "key17": "2TniD1LSaB5RaSWFicS2eqQERv1RrwMD1gvvowXPixjX4ThUxqtbB719mzST9kx9jrtYgQZe3T5AxZfzthEAA58r",
  "key18": "2fG6KHsW9E6WiRCihJoenjZafut2CDWYg4tJCHsBUdBxcF9RaeL5h8HpjiF8w5cEQW6rj4kLHknxUPzuKx5Ff85w",
  "key19": "WVSQzbNB6yL31BJYkp7JDJPbNy5pcuUnBGoaUku543LxE2bwwk1VzYpNWv6HfVLdeHQAwTiR8rCy2yEipRy8guW",
  "key20": "YZrcDFW8HdvYJ8PWBUK4zjtraEY4J71jwhbBFxU9UazVSWTdS6Fs2wwPYucPgMGryiK6jpaSJPZQc4UbNEd6rcV",
  "key21": "48gD4vgV1nVBAK2JDQqZ7nnC8MgaPhj31Kpc8TMCLcTWMecPXNpnV1KCncWAqDrSArX3rTGPbUNH4bftTqyCWxst",
  "key22": "3pDhs2H2ska5S2MRURCCrLYEmH4uLgkNkSYf9sAoi9oHkSbhPtjRarhhyKdMr27tWfb2gfmWGuhVkSQnxT2ysBTq",
  "key23": "39WZCiYqJ9jpytP4EkgppPNHVZnoLbyLHPVnaCEXyC4MGdNaffc6cm8H1E5gWTLuLq5jT3fPKfM68Mj7eLJx5uUU",
  "key24": "Gph3e53aKDhnhpugrtMwdkqCHgMu2oUQJgKqhv1Lz61eM8bjxT1F8XSNab6cgp8SA84jbHiRycJbGcZdH8EQchk",
  "key25": "3ADVSs6zFDoqWGuNrNZi13XHAHNEx8GcrkKfiwYkRB1rQPDeJ2ZhsWzYohsGWzoGJLpfUGffM4Nk1ySoNQyKVuKa",
  "key26": "5ncEh67KAaGT8AcD6Wz5ozsMy6E8sMXHTveRTdwSmxvQH8fioYUVGZFWze8GUsW22EqH26w7Bg7wUrM3RT93UG7P",
  "key27": "58XGfnEmqo2LB1RVt53PeHcy2v1vQZ9TKm7mRrj9QbMdrcWTe4wGVeD97N7fWeaHLQW6REKGaz3gq6U5iUohiEVe",
  "key28": "3sqJDG179gWRsWAEaFRa61aR2MVbznohpuJpVLJbRJyqXpMgAu9wxk6WMeowqTX2oSPhn1dQq3RVpoZWYfcVWtuj",
  "key29": "2W3zUyNZqyfGEYCmfxU2T3dwqxgjxdWMokxf4Qnhpvy3Q8btBnwnuZkTdbwue4R8ZnXJe7ovYVdo7FWfPrbatPqg",
  "key30": "3XdWpzhpbTeizhYCoxtSbiF8PCcUQSnxPGZs5AHvUvGeTidCS6TcjFB9cYYfF7gqH2oM9zypJfg3VYNKDxJgZJoe",
  "key31": "2jeKnbKoQ3R8oCvVMm83FB6LLV3jyhtZpnVvq39g9Gng86EGczJiDm16gJMGAuXgUk9kTJAxb7XXRynkpFRAWnTo"
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
