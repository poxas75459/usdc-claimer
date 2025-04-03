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
    "BcVEWA9pZw1cR2grs8XBoDoyPeD4HcL71pXGzGPJwyRGeLggiKxUBsgeDEuy3SXr3RFamUdomtE3ywWdN7qtVDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NT7zzWU6Q5HnjtzFMkFanZajsHU7eBA8PWXp9iFw7fK7PxA86cw2jxNyWKE9T55DFTr9qdCoHKPdipC1G1TTWHz",
  "key1": "evxAgYM6FYKaGXAyvjNHKomUPeqetCoAY5y9er7ABdRm2vG82WjBNpZ4WsXLFcaz2W748YJGV79K52RV2R7sLRJ",
  "key2": "3vJxFdNrrSodPY3Bvm2oDUESDHgfbJ6Nj77TeHSWNbeXeSd7jKhNK6kpsa2vXoRdXS2RPvCSp3tUxdr1gPL8xmNr",
  "key3": "5Xw6uV69SHMt1bbbQCMQZqt2vzxYt6BRspv2RK6Y8TJGRUVmcUhzkCWnWAqAbybMH5DqHKu87BHjyJvqYWQEjZ51",
  "key4": "2pYL3oaTe1hksdJnFPKwjieMNTuEXmMGGmtkNkFuaFoMUU44QEr5LAx88KsiyD7YJ5eWL9gXdpbHUEBJjmQrW8QG",
  "key5": "sNZnfGhDwQCMZrnnCbN7UBRMFfv38u1hSPH51HCfJavxnNBGiu9EdSan6YxLVon924MssRHkQmW1DsPHAkgSDEc",
  "key6": "5JWFLHmpKrebtE5BaeTjdePAsLzeBRJt2KpUAQB3fLhqC8PNJ8F6Tey7gBCxh94BWuNAZRdEXDWYYtXUhD65Wq9X",
  "key7": "3Kdtqv92G2YXaoeenQDU9XtdDoLzatx3DV6x3vsv9W15kungf9tTF24sTxVsqMDqJwgU3XGjxz4kN8LGFGCAJP1f",
  "key8": "4CjCJXBQ667u9hm86uNduEw6LegVwgYk2dcDreoSXvuZ4T3tx5kFQnKAwopWUD6yrDAR65Le2k3aazAuGwnmqEFN",
  "key9": "2j5FYRrSgAvT33Nak5Mz4V8iCFc14twLstvZEiWvCoUW57ASfeKoVL3KLksa6W7qSpmXVzeWisXPGf121tjXgqTL",
  "key10": "e1oi1uJ2yp6jKAFSznhDtQMoF8P1HF3r5x8Mj1C6NZCxqujBvucytB3a1ZvBnpiBr3hpayZaCMeABCWV7PPdx6H",
  "key11": "zUNKTRp42iBpv1h7o3Bd7zjTZwQ925kEwr1KykdHxzfkU1YyJs4cKNVeWVEPtteo2FmTgqhWKSoqxsxC6QhvNbS",
  "key12": "4Di1CZGoRvdKMkkkS5mwCNeFozM5NWX96j35pHZVcX7jxTtoX2FJZjw7xYocN3B1TAz5dWTFUt3t1rvdAzC1nC9L",
  "key13": "21DZ2Yk7zWSkkbdLiCJHuLYfGZTQVvSas5T7J85Wiryw9u9uG3J1mdjYXbnqAyYULP4Hw3irYAHm1nx7pyQjmaV6",
  "key14": "32nERe7t34Ua9ZMWLmFGAyaZFT3soszUwp57AwXVNXsFuJcvgfAEy2VpMxZLCwJGSuxqif7ujXfG3EuYHPKTmZg4",
  "key15": "3UtsMsBzSyMgh17WA75hfsudrVwJh5ENDcnGsH2j5KQ8Ac88kQ4veYMzKVwjkdXxeLRFWsxF24pWGXeUJg1WW3UN",
  "key16": "EDjaG3BfZnA56NLrDDvaHYiMUpJ9gPwHh5stvSSH4ADBYNyVy3wVbDoaRz3vZEDXS9RL1ih7YKD3xBPB93U3Sn5",
  "key17": "214BRna3xnFCS92aoiiSLfqoRyJjoGUkhkZBc5bCBCuVj1vUZrsA6yXf3ytPShrhwEMgHvGrB3BvHhNFUcjQR34v",
  "key18": "2v2SxaJriXDAn6ZW21P4YE42EthUUAqT3j2dgF8Se8wbkpF1XteA1ViJzvF8ttFyQEPR6VtdHgLWE88RmerqvQTV",
  "key19": "2fAcc4HiaAmgAqng7P3Ls46VhnNj9ZrbNBAd6hNppWRbNyAZPCFwb1sMb6xC8CDj61TzvRRV9u2PV78PGLPXJmsN",
  "key20": "3e9wjKAKaRxAggPzAqW5MYAhQRotdrjxLtkKP4JRtmebsE2vNuyUmBGCtPzkPQvag5YP4WkpzpThyDZFqTzFhGTX",
  "key21": "2zHZT1RmCYd3xEDAVNHBR8yGdbANcq8djCScNFC25TRimbc8wTt58mxcYMAzF4RKkFw8C9K1bYMuWgdRQhP99HAJ",
  "key22": "44BCWrx3Zwv5CppD7NFdnpCf7zWBk36GsaSA9zYttcVDa2vBtLTnxRziKW6NqkcqaDPxKYdoE5qMALzXZaYRh4UQ",
  "key23": "2GNdyZzQ4nUXSBmbUGdfgXEWwtSMZbihNu6WcMMXucKTsBE25QEHFo6UGFKdEeoS2YginggbgW5NDXaNBm4Bn25e",
  "key24": "42khnKRrrrZCG5NnHW3yUGacnoEWk2yRc49ahB4gDYTQXKFwPHgSTa7sENCaWoPYFewjcuQY8eQZXW9ppxi6a7Ba",
  "key25": "C7Y474qJYHeRmnJKCjYBXcCJJS8kiv3mHQuhr5A4hJW5mbEsVEvpw7Y2WYTBxVHL3vpyxRszQJwuUcMK9GaCFft"
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
