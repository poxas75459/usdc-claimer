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
    "4iJCM6xJwbgEBpW4J5hXdttjgsrB2abQsrhR8TjqWY8BARfK5SuZeJyy5DXZm33sGYZE1Gj8DjZxV5pSZThvbbyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rm4qkstZy9dc1RQ1NTFSKYNPp5eDfgb2hS3mJED23rdDjNW89CdvTCqK4PTJEBDwi15nELgEbVesXJuQZqWVC9",
  "key1": "VHLfuM6pZFM4bmkCdJpcieoRAhVL5kjhfHtZk1KXm7JdbuqE813odYSau5XMKUmWG4ZK2vzm9FwMWNAy4jvdhQF",
  "key2": "3p3ArpGyNLVGDB6Vo4Fv1XGrjzPnwssN6gKx88RMr5sMsSQD6Q5EVSXQURTHWb6PKUcMP8An4RjLLvz4bar5pvns",
  "key3": "4yWK19uszNiny6zNG9YLqY9PWXGEvKXuzwenGk8h37CQiXVbG1XFLr1wHDGrWpdVfTFsCrYBCt1ryaXheXhHW5kb",
  "key4": "32SHwAXY9mF6UQPQJn53qmgCL3T9tGh5jP6U5Sx7q2EeZxx9NJYn196ogYjEznNsiPy8jeXsRx753adAgRGXWYtU",
  "key5": "YyzwgeRMy3fft1c24ynLW9iV2edQTTW4UdqqzmQNuGGYsSeovkLxRYnnQbo4sZ4CCdMBvQ8D687xeiRHvUbX5nD",
  "key6": "47KxJ57hoAm6bm86b6HWiuUHBy6D77Cd4TQkqPNFynbGdovPDJgvKNg9z1VQXFCy9ngV51ESM8bTYLbLqGEcrY4w",
  "key7": "5abR9HcnPd6JZNhie6P59WriDiUXGCvHuGERxLc6Db99UBskmm2PTiDNv9Nmsud4PCBuAeiGt44pXZ1eXB5WTKJ4",
  "key8": "4Z24bYxMSrGQpZcD9NmVhs2ARFTaYN9WyV4Ur5VVAyr7a4gfEhwv5zYB58Z3124fkmL1NZ6JnFzDhhrxjAfirw9J",
  "key9": "4CpjpJXhoTVF2aqS3jfkRmiJXc5zPQYRyBkx2kVVPVdDh6A4t7iZBwa3dYg31fhSuBDPKGvNcGpz83UAAKYZxn6k",
  "key10": "4c27DMrioDE8EPRFSyPXNeKx1DVnKWrLfnAvNQZ7hE8wja68UPhfK3RpeUvxrU9FAvD514a7ff55Y2puVRxkh6rK",
  "key11": "9B2fTuyMHopw2mNjrR1JCqY9iMmvfCZEg3WDavJirH2K4CqwLKCNt4rpHvDDa3KjhXUuEEEzRZvGQkgvp3uVwyR",
  "key12": "47KQKsw3BpuWLX4fLMSxxS7GqC3VqEtRnzNWZ5FqKSytUiuLHh4H8fcKf9sk41cXJAxjq1pov73V6zj9KcKF8ZcF",
  "key13": "RpZGuvc2w46q3wdTDvurtFyEySHrEuiCprc2Fbkcxhmg2L9wRwgT59wV8idhfc1n4NwaU2CdrfViHebpM4TT4na",
  "key14": "67b7FPZhae7xVHRZAxauKHjL1JiAHhRPVGvdo9x8BBNHGyPnpz2YW7A8hpVYg1FXdhvtxGqwyxeXVohEE8acLwFN",
  "key15": "XNjZYLDmcYst9sTgpVeEbvKVjb6EeFbe8Nss4nm6HWurrPPHad5EUK5TaKKSrhrufQTYv1uj6NKgtXAXUvciCxD",
  "key16": "4jnjZgigvTnm5o2Cu9zahLxe8hLGRYbjfhjUUexMcp5m5XnEdGeN6CqLTBvygiZj95AzSMTUDzudMsV9zWSGa1j5",
  "key17": "2PkGkVNa3HbKG5Fc7fj9QrqNLcH58SmU5SyEmXCs4xEFpBTurMEt93aTv1KJaGbtTw6ctT1rqU3RwnwuBVNFendv",
  "key18": "53QFe4Nuef9VE19fAhURrcEgpmyWee98wCKaCMqeiaNyUP9nuy4w9NMXEFZNYWYEdbbDN9LDyH5c9mPkaNJ9BMAg",
  "key19": "2w3E5asjZA9o2eDWLubzZhe9dRDW2r7wfvWa9qrJL3p18nobdoxdHa91fHwdyhqJpXwUhjQYQpzxDRvGxymiASQx",
  "key20": "fopWbbeGizit9CoKZXu32amGw7JveEVTvQFcKAp72wNWWhenaMRdDZtYRL8BxCu9nhMyAKEiJTwwYzXLn1Q8ZB5",
  "key21": "2BWTZ3ye3yHYYhsCmvKxtgwJf6szrKRMt8R59fmo2i7j9eNf5syGuqRN85PxRUxdUT8oh381Fa2ZuAikBzeTMvp1",
  "key22": "xmy9kE1vuhMLJ5if8a91X1FEwiPUahudBw4NAHMqG78TDSBtd6FHwBKG1DGPedM5nqjJGg1dZcEigE9EY48PiUW",
  "key23": "NcKk8DJsK9UsDRGv3sdrnyywtPd7VgnS9PkfMcV8vWZE8pbaj3AeyhKyxyMziMkmUiEiYWgdoP62EJGkY7nZFLT",
  "key24": "5WbrVw3fk5RT6FcnxysXib311iBAFtLwZAMPyhppkznZJqoTfsoPMq1fcSsC2nXxhDQ75j9vyXFmMxq2tQb351ox",
  "key25": "3Puzz8yPYNrNVaAbpeF1iTuZFqPBQDWhEtQaX9bCKa868W51R2DuRRZCNXbgy8nStTiG7qJ74ocAqpcrbYF2VZfX",
  "key26": "2oMJABtuaTDNZHb96v7P6ie3BiUwmUjQx4nTcPPWrhyG6rRJS1LwfGDoyQKN2ZBxRKGxmJv9kvNY6NLCuCMXMunV"
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
