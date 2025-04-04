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
    "4Pbs5zkggcF2cT2eTKCKBM43hC2ZyutEVcrXxyxwcHBLkBcD1FYeWAzwMA8MPxi8FvWNJ3PJVwsicZQn85f7KZ42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KXbr6PbKz3gwCv2M9MNpAUAvWRN8ZSCxZWW948rNmAChB46aUxL1GMN292fdj8r8yan5duKGURNV8C5j6BCw2SE",
  "key1": "23E5PYbXTDmSYfWZ5ADcHAcy9e3q8H5QXQJFpzrwuJhxio2LTe1aesHLpHqLYsdgLPTbYPUeZNAm32Vjxz6WWTs6",
  "key2": "4Xq87PSsRMeT4BrYLnwnpAnhZajieTLrM8rbbDFvdVhChjbboXBbKceCbnsghzLT7774yT1bsXsvr7bh998EvCHp",
  "key3": "18h1BLLfKGGcys5pXg7A6fGfvapeJrENZF4icMh329ed7DynyF8GAmTVaMkskWfS7AXH91JgQDP8YAmBSKb4HDT",
  "key4": "5ySc1fubrMDAHF8o9fuYe2a9axSKFntB1NQvWyVtS2fsywdnXQbW4NTtd81GbehtLVF54KrAX8T29tbJN3aeXdoi",
  "key5": "3CtUCiXcDZ53u2FULEDw9fNwASEoz972zzWwo44ZjEJft59UZGoP68iUE6G7U5em7YSKRDmLJdGcBLQvZpLpo7hc",
  "key6": "3N6M5tAbti7RkuQRy9a7uQ6bj4JXkV8sDfeup3r3SoGza7B51v5gwzRC8LeTyVjQy7w6F1Bh6cbZms1KSEAB16pf",
  "key7": "5YmvGSAqdW1xSAySxnGByuce6EBonsBGuxsqzkcZi9s6mo4q4DCQVQBmp2ZVrxPZfcdXt5bLyoRCwRCo8X4sGwEW",
  "key8": "4GEfcv38C6gAviZnA7XvT3wKrjH5CdD4e7K9GSypKmNsUz61o91RqRDiDGEr3DjFFQBD9AkAJMPWZhzWkgAv9bvx",
  "key9": "dDAET9xou9yGtSeScKUNdjdH4DetbrzAVYg6KJKk9We4pd3g9e2isyYh42Rx4C2e8k1fkdCTPyaQXs2NS7zYTJZ",
  "key10": "osogzPp8WsgyhkSa8qvotbTct4xVQKhcZoGPT7SeJetf9Wba1UrGRRvh3DD1E4B5mZ6AZFtqFsYQcAwx6vH6N57",
  "key11": "63TQoboCU7HnU95txxfwdghp1XD1W6apLXF4SFQNSiezJXFE65U8V66TWKM2YqKyYzVno6PaLeiiYqngeQWbMTsj",
  "key12": "5vjLLhEx5DoYNFseVCm2pkpL45TYmULcAyQNs4euc6tfefguirk1phCeQkTnNh4aKbms1MdF4UHY5GCQZPBypq9A",
  "key13": "2pAJPiPq1zWKBfGiFc28CGWg37dh6GkUsWAFNnnX2W7S8CHtfbBimfmbmgNAL1rfuq1XzXXKCS8U8FVkvJ1z2Raf",
  "key14": "dk9a65Zx9GCgEUxdamNRFNF35CdNM9TH79MVKG51jqWArk3LXnPt2ypQjeGix2jmJ34zyMEFcTyMoavzicjEBT5",
  "key15": "2Rid6DGhLNqyn5fQTvJoeV8YGeV2fTwrBjXJjsrnxA6XpGc8mwjW9XmNZYd9WYrBcEJyXNGfTgVzdeethzMNXzSp",
  "key16": "3naoSLAv2mXCeHrZPbAcuhwgFiN69AR6xyJWvTnTu5Er1fvFchyTjXJ74qa48E7QRP885L3bMtdexFBzwgbu7ZuY",
  "key17": "4Zu9DL9VwB8kjKjZErSGJqHETdEjSRGcW495dChWLDAFHU4iDCYyn2kEp9cQGoePmWs5BXzHoEsQ1huo5kr9JWSy",
  "key18": "EhkeFB55wGruJstvXP55kwW85zdkdpHF8sDTAzj19su7ynjoo76gVVjpyqBMYgVck2vpdPpHy4CegqVhbP2Hepy",
  "key19": "3529eUo4tZZpEKF2YThxf9NvtBHHijCbsnGnTQ2riVBcDX9LUfz5M1bJoAYTx2dRjtkBLi8bwAD54cEQLPRpD35r",
  "key20": "5Ae3B7xLnG96dyq9g4njbKm45Aveix73tVbv3WRKGWwVyDnHEBkDbXzrNmwiDR34LCgcoF19XvETJ2mizjaDwFcu",
  "key21": "3Wtx3aZfUzf3y9Lf4ZMeADD7NchYYGL2g64SmMT3oMuuV2LZGoq7QDXQYwmmXQr4MNEyN1HDv7J1Z6JYTQCNvQsj",
  "key22": "st23H9zYqx5bukua7utSqetR77kvJyt7nPsxfF823CFKktovihheqAbjnnW4EBFMeY1pMwWFnmoJEt8pcdXqY4b",
  "key23": "5xGMhmNWyMBBU4mkGMVkSFecAAHjcdHxr2vMVX1oTDKELVjZff2wRsuzAjBDPdT3MLsUGEWkjGhFE2eTVMbfSoLa",
  "key24": "5awkZtNk8zQffE7S5wnDGVoXpWvRALUdAwwooR97TZ5cM7NGgRq1PKT5eY5s1x3s44osRgnUKiLot5FBe6zsTBRj",
  "key25": "3CSoG5kZJsFSwMpnM6rchXXHy7Fce2Ucjt64TcjSdziU2xE3yJX1A774CcgcsQgpjN52f4c5R5Nj3cT87BawsQU9",
  "key26": "2ehirdEbEnY3DEyZRSs4dVLhdK2S4htt3nVuDwg5YvJWRgfwdAmfWbLnygsGpuGu9bKkPzNcqvwoUXemc9Y83bhG",
  "key27": "2e4dbS9y5MmNqutvMHCiG1j9V9tvoW6YtXc1gpV7akBLoGeqqRbxKTXdCWaZX9d7vaEDZkcfzjAifNDuQ3vSTX1U",
  "key28": "b8J4znfFQATQFE27GioBaCzDUSN6wzXWCb2F2o8SNj8yRcKfhhtDPyAT8Asm6sGu75f5KLT7qXDKN77KRtYUX19",
  "key29": "3EPs9UzemYKtZCnZBdv75a1hxs2bqS1HghpoHMpvKYhhta1muHATmGgfHqJPrVuDerw5jTDUht1Wd1rqaXymMwZD",
  "key30": "2zv2gooAFH72nYgvo1Zyt3kb83So6wReHnEg4qQDXzXrbnT5vhaqw6ut15KS6hQN8Tyg9sum5phV6C9icX6G4sgE"
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
