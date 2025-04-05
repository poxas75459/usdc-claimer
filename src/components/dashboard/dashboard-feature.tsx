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
    "5vTp743kd8q9vgEaEooMz29G5DjJ4qQZna3jyP7yzYE3SDjc6njuNY3Zd97H9JPW7Jb3jpEKbZm8Sas58qRG7Poo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZtwMn8qULgm1aXiSZgRGDMzXNnDRHKT6ztLT1RXst2VfqTLFf8ZprkGWhvVf1ooBdX96RQfNgrQDfhch3wBD7av",
  "key1": "3UfuWVDHPH7L9DF84ZHH4pXf8VFx42N9b2TbAAiopXkz36AmveBSRKoxdjHGiLKxQajym1ueCXn2ZNDhffnjRJxC",
  "key2": "2qB24bCNLbsPpiDjYfUmEBrikUH67i6GxAED3SJt6XVodtvwNvy1wH6VAano1NhXswgYwFuyXuNjDQ21T1uCn8Xr",
  "key3": "Pw3oYhvfEHkifHGhrgkUyJH2dvKTTvCYokaJBzqpmtQbHe31ZMUHsVbMwWJUwPErTeZYhBKLXunYWNpj8vcddQy",
  "key4": "2uEkcGUfxNXX3N8h7qhCGDB4uTskqXdemPgmC5eew9vMX7JVK5PjYsC44uSW4CFVowtFwWXtWU6Nbiv768AwB2EE",
  "key5": "2SuEHufSX1UV8ht5Zaj7F7SzwGYyxZum8xh6tSGJySxf6pJxcAquosTKNp8K2rv7dcyHyhBGpuRDfj5eX365WBE7",
  "key6": "4Jv5Gsqb5RTxYCPv1EVNjEUw6Qxx1tLSeTzotkkxHtV8v5TUjinuvQtSDR3y8UwWTmmXiJ8TJV93tuWoZeXhvqJJ",
  "key7": "5qaovKcr8HtvNYHR5wBuRt1oEoiiK35zJwNQF9eXJv13h83JZvDZFZn8HZisAATQFsvMEcrWXkKuwFp5mWjR4hcr",
  "key8": "1qN8zE6GgELPtFw8EwWSDbu3xm5nYWwFAdobCmwizvdUYhjQc6eiHL3R4HCDQ88xB1qKiKRZ3s5iAnm5aTvLNY7",
  "key9": "272NfB6NVYDpPPJ9DshFjf9paoHQyxfzwZXMhuK44EjBSLUPUWb69rEmDZshhnwbQiMNsKXHhXVHz7HKf1ss1JS4",
  "key10": "3QYYSHtq5XD2eXascNnEqW6GYW1pgoXPwWKF9VQpT6eLvyxGFZDbePk2WTWT8Q3JtTJau5VrSxhBLswA8GbTkFFD",
  "key11": "2kbDDyGsgMq1JAuYgzPmtBathBv7pSw9Ay1u8izHnYJb8Ltovt7C2UGVH9ZcT9ezfLKNdjmc5fk4qAAb4Su3tgPT",
  "key12": "4x4i2DyB5zdRxsYYuxQyJUTw66GUAxdG6vgTe7rVX2mTsVGSnyRJCJttzwAMMMDb9MZEgMe5YEkQXCiSPEN5brJN",
  "key13": "2GrccJaBxMBpx4vDoXqVqVcurwVyojnJKJPfNS3NwQrrmwkJ8C3LNPCoGQN8pZ7EXBYcpc6yY3vveqAU1niaJHPt",
  "key14": "4QHapT95WyeoRZjqUFkhuQRdLNd34eXo3jPUgsbbMspYz5sh2gectfJiHEuDjPSyXcc34ANjENjBy7E7QD3AF71q",
  "key15": "5jM1eP8vmL2hpDAyRY998desa8fypAFFAUUYnnh42zDKwmRouScW9GjHMnKSbFkNVBxThDa4Q5AZ5jNvKfkqjcF4",
  "key16": "4kC5pP8UDXUerd5SvM9Te1NELCwEZgH3766veMAUZYejYEFaVVqDQ9CLHR1jQheLwBseArCRrdZjv1Ysw5N6Ng1z",
  "key17": "49C7V1sWYhd4cFqsBtTKN68M1D6uHjqn7PsBTWxBt6TiXrJBuDjrYxmBDC3vCRhMN3vpfi83sLXEfDvfSmobfXrH",
  "key18": "4AeMQUr9qshDo48hHQfzqjLoDxaafviqBfYjP2JJyw3dktt9sEHvEdF3NhKTA1zCF1ibQJhrnwAuRaSzRMWMFf61",
  "key19": "4MMUv8w5JUQ3krNaRTEX8mbm6VPzjZhv3QUXudbeHqtMMXDj27KrGe3sHZAeauUK2uEUBnq7LXN3JVb4BcKB7dDb",
  "key20": "2ZHxf5hrWNMkkj1GFtYVJEPAL5nv8gyuJ1x1e3eGS4EZd5abVJiVaU8fPh13d1AddXpNdRXgRRS15Re34nY1kULa",
  "key21": "4APgDe165o69hcdDPU8hz2PbgJMN6VnK4meC2LKZNZ7PYh6dMrqur2WF9uMc4h3HLnQT2Y6bfmLuHr4krEAh17j7",
  "key22": "3KRR2To9DNbecD9nnQ3ZKxcU3Y7W6X8JLU1kAmQ8hNp8wLWwm74mN1dFtZXHj9Vh5gcMSSBF3P7VoysRJSiz8toD",
  "key23": "5S1RWWcPsc7aAQakCTPConhojNJUVZu8JomWvWBtsT88k2Nbm6fRn3oNXZFeCeeDLRcigmSngfrnjR1bW2SmHH8c",
  "key24": "36axXZdHZbNfFJ13oCj3iXhf2MPKcQ6G6KhXHUTwdLtYrw26UsuyRYVbpTb1pBiCPoa7FqCcLYL1mJFFfEy87ZHf"
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
