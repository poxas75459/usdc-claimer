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
    "34L47k9oE95AACANFn4cDeTwRTDriDsTXP8k1eaW2AMTREHLZ8yKvH8676fPJUzYGFbiGMpofkhgLGeYUpDixcTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nVXBXpHDdSgG5aDQx4LWKcYixDqNbFQXYKkUy5yFebbDdFdCkJLLZPXudMhRv4KDdUjtE2mchvf8iREM4FQLU1H",
  "key1": "zwmQwnX1C3pnz2swXFkMqB6SLizxudNiEiDKDqhzEcPgdy4REem1WQp7XCQAfqWgLa5Sm2VgFzsoA8kyDBokBhp",
  "key2": "d2nwcS69gdkCUdvLoiowmoJFhkmPg2HwSvtAVrYyPREwj2VEcRzMrhEeTftKwet44Y9dK1mVf4jM6ZwGnSxg3bJ",
  "key3": "4mkzrVeNsYWFwGDCPzd2XoHpqrjTSyWZ7qf35JVsuXSP3wGVbnTGdb1LnzzSkGAoktT4asG12nAMfBUXoxbZU7GM",
  "key4": "5VXTceT6kUtaivGGDeD9ftKQff3wtDkEJcxFVHVAXdqnKDJzjj6ybtAz9MLwsq93FiXuGw5szdRjYrxNWFQTcRsh",
  "key5": "2J9jbjAf9borJmYHHJ2SovhmNuB4NRSi6qQCYhmrEKfoqn7BtH42aDGsKRhumYoAUJbQ17gftC8UuPk4Hq4GRKXQ",
  "key6": "5Z38TEvsV5CUKNLjYg7akhrh7VMm6AJLeEgrsQu449ZA2d8xg2Hv2NtbC8BZrr6NBmiwCCDc7wmpuWRJGSzphRXK",
  "key7": "RqayPrmhsmh7cCt93mS5HmXHNWpiUQQJH4wnLn9ytGCURXJ32iRxJz8p7hK9kU6S2zpMq7LX3LWym139ydTWBgo",
  "key8": "2QzHBY9nrSmw7Jk2F497y3dabtWpshtLWDwmg8tiV4urXUMacs4nqpdzJmudELuiWiDJPcR98qGzxmNpLd7VqbxA",
  "key9": "4jhAYq5yHL5mkoNrpmRvMDAgJ5rPUgU2jsN1PMGLhVHvRAy9v1ExP2U1kVAJeWAczK39oD5HEUN7JrGG7Fn3RRhf",
  "key10": "iBQzrfGakZnasAmQbWpryKuhNaxPNbjHCLqkj9tciLB6r2sc1hg5SfF425SMs7WYVGmRWHdHiZhcBdL4MRj1SLW",
  "key11": "5HJuJHeAoMPjtVkbbgAEbT54VGuC1s3rDPo5AwtKNdmNrndLo3tsVio3E8b8bnCTWZG4tBsR4KDt6subdVWpZV34",
  "key12": "45LPvcymKUwhboJzwSr2udYjAt56WcQ3xAusiVkNEowxu4YM8X46fSawH3JjducYFR5Bph5ohSsaHRCigucJBuwi",
  "key13": "2LC2sy1uGzDJtejSHrJzGw83LhEKehJZB1QopRoXELkvSagqdY5NT1t7Avrh2GgFnNrQKprDo937xxiqRNarHPU8",
  "key14": "suhYx9XNR6CqH2Mpi9yV3wdTRfHwShVA9ecnj6Ye3DNjaR3edWKr3MGRhJoqWnPaju9J4xeHjiZmjqvfpCm4dcd",
  "key15": "FVSpx8s9H12NyEf7vSFRu4s9ks3ehwJn5CqUW2Q5MaTRYe4fyoCCAQhUF9U1DhHzEbZrmh7in4Aoo9apEyq1pwA",
  "key16": "3wxxTxLdsnb7mmgUkXNaNEQaJEWiADqY7gBRdypCNqhXiQ5qYMTaBWDCbywEW3vR6EMBSuRsUsDScqpioSwoSEmn",
  "key17": "5Qf3qnm8cuWHUTFxdFFomUW1S56vLCberogiYroBe1RFH1AQqsNze8AcdYccgf7WD9AYYMUHmHqCRswsomRkD6q",
  "key18": "2tBZZVrxW71i6AEhLJUUAM97P2y2L1gnoxFfuzb5ZSsnThbXpF729VUhxqvUMmehjcTnw1BsYeMmEfzr758CX9SC",
  "key19": "52DTjsevQATyXAsPZDTv7hgoPJTHkhpjuQcTs3uEQHKQxkSwSJht8KwGP1bx47xLL4zLYZFcgC4N9diMCLi7ppYn",
  "key20": "63Q7FJWAM1H5GyekPovpnWm1oLSy2zMX4aubQGQhND6HZbX2v65NTWfGHtnAuV1jkZhHPkvJp7Zqzgxw9uQVTreN",
  "key21": "5AgofXBiHvgNgF2jVf349Spd51FyPTwkra3XN44pHdSpd9gRt6zgZh2aBEhSNNHF98GWH5xU3vkN9MYk7qDF8iyw",
  "key22": "65cRFWShPnQwC5bEC7iiMR95PKuaKVr8dwGM5LingB1Q2RokqfZESAaz6Nm6vuyt8KApSEnk71dwi2jk9fXhHNAx",
  "key23": "dTqEvKJMyVqemdnRkHcCBsNxryHp2wky5NALWDM4T8RtZcDzDaotuA6hj7KCGSre3jaKgdQ9Gf5poBUEADYgpH4",
  "key24": "pvrN84JyZaXmMfTa8B7RLkiYMmtiJ52FBzuFhnqGqrhWkdpFAZcjdnLf23NTPkHXG9NCHKk27m1Sjk4MfQKM187",
  "key25": "4ZrqHCcZCSnX9D2v8veEnyd6YEkWN3tAg7M7spbG46vKKuESikUyAq7c8AcVjSUZY63TTZvgrXEcQoC5gGbqqPtU",
  "key26": "4NUt1nniyR2ULkTvazemsPfjpGsP22hncKJBP82EkBZrv4GRDHjVjMmrGYqYixNSvcexrTVkcyAcPciXpuwgLNFg",
  "key27": "2e9Wj1387DD8Zow2S2CfMsYsfA55vprwGogzbdTGiyWYWsJ3vsE4PpKxBexxRSWLD69qqikYHQW7Z7P58jGDuvad",
  "key28": "2oxCA5a73gX3KPMCv2kyzgeKMiDAJbekpB3zNHsUBRfGWQWv34Mvidjn8h38gaeD3ZuG5tw7pRQeyHypGq7jNg4M",
  "key29": "2pCmfj4NYwReALrcv3KpKcMiVYDPeE4B8TWQp74GKYNpvzhRRpMK9dZxK6RnjRKqy7XjNCnQ7jxaK5PNmyPW78Ns",
  "key30": "5PnwsqC2VP4Rdbdb5KhG1f1TZSHPnEXgfKBX1vagV5pNMW7JvskJ4yRXdturwynDrG4KjFsLk2eBhRHE78nEKgji"
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
