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
    "459QxJt5NYc2xakZWRdsYLssVcLwA9HfkGTthr4T5vdzQXfC9Y2eQuacT4nhe6hCDB5G3jM8VcRryTH5NjnCq62L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tL5HeV99K5uDwDhdPWx6te85NnjtarjJTYdEXh2gLyT9u5cEG4NGV2SmXTdSYrQqqjFeZvq3azu4DAC2beZwoe9",
  "key1": "622B2ECqznYcs1seEGWbe9ZjE1KRvdA9d8ggT9UzA4MiHocEW3ErWp8srsTTP4MZf1VrEfxwvW46BHgWiNcCimkn",
  "key2": "7pV3qLzkCTxvfJo8ry6kSgNRyT8XmmPAgHR8jvGqAwCm3QBtJsM9jzjgPX59yYWLxMrEAKk3Sm3yBiag8Q94xRy",
  "key3": "2aLbP6erP9kG5wTiD779Jjt8kxtrhHL3LRV4Dy4ijDyEdprAoEpKikgzMCx5pCKK79PTMpBGki3rXKTFZfNFRyfJ",
  "key4": "5wVALmppPgvWU92cuBSn2U345MxGfMXZ43JY7vau9eV3kYKMLNeaGwXLpLa49VewMMYzwKE4KgVRhH4827eudpMT",
  "key5": "67iQmpQ8aBkCaxSrK4f41C2xiobrmRemxEXwQKf8Ajsc5m2V2XgdAXEpbNvyLXfS4m1spqMARTMqQ15xw9VF3HWv",
  "key6": "5Z3BEDSejeSCcjbhRtMWkR4sHLKDNR16wFmH3XcQCpzXf8Goqeq8HLca1TLEJY4M971Zmtag8YuoktM3mmNjmKvm",
  "key7": "2yamfLP5ci58g1jqC8HCYG28ZF5e4SGhk3nYVH1hMAQikMsGDgDuEzwJFCVBA1E8VwQdPJN3CncQDC6RR98MBij6",
  "key8": "5AWsha7DPd8p8fUeE2CB4WfSr8wwTLzctnCC9r22PXH2yhFxBXNGUfxEGaLJUcfzjisfaw52HRjb9s3tYQ2c4kvV",
  "key9": "265GKVstggSK7fMoepgNbbjjYbfbN8gzYs5vMxG4waFFArh62wcyjXwEv8fgVHFNjX5PC5hEgJXgzBYXCYYeT7Yg",
  "key10": "5VhRGFsrMvpqwGpnf6XM8oeQu9jpkXNSaFNWhr5TsxPtWmRak9NE2KJGCYqGYv4HrCjXMFnanDseb3bMAfCcHTx3",
  "key11": "2CLDqBAYoFxZgrYN6eQBPP5w5YLpWCEbjie5XbuiBexZKfxc5h7sAjq5RE9TcoKy9H3Zu8h37A9yhuGU3tovHaFi",
  "key12": "4r8KEMsfQgTtspWUsD7yG6abVgwYLyyvvH6Ne7tC3nUcLZCYD7gLZabPuwwiacmFLTyMJRJVgMC1FLo2VeXDyMtu",
  "key13": "3HtjQv1f3LshDyK4yg7uUwj21xhc4pFjCbjKDUwUP7FvGWncXK1YBTzFRps3yayrXNMWTTpaSC8gzWxpj3bgA5Le",
  "key14": "5FSAut12ekEwdgVN8yYMQa4yfARVdub3vFptfKYukCorSnZe5W7d988FStQdMSVRY8yp8ptvK5ZbssQ295NN5inw",
  "key15": "5EeeKxdXfmLNLjeoU8787smaRkg8qhJ4mudEBACmwp9tsFaDYQwkNVvJBtbkrpAmcqfM5c36M4yP9Nrwst6NrsAh",
  "key16": "2TWEbM1PDpKzEtd2FfYQ2BE96UawobTGAyve6LmV3bMxN9oJTctqXTVxao9ZB5Km6dQSJQ2ubLGreim2E5RA48SE",
  "key17": "51KWKMAVkwnnJY6S4wmxPXhrDS8ofBP3dxqRa5YZFrWthLTpQyKQUXyHKEACPg2QQC14zGsiNvBgnKWqRmuxjSvW",
  "key18": "3HwnK5R6pvFxpqgxQLxHoAudvYnttP7617c1giebYuAh4eMAScvJgcEuFhRnxJMqGUkBfkAnfJqbzHgQ2Ta1N7ct",
  "key19": "2ZqiyrDZkfJ3VJC5qY82PmAG29WnBTnUvYDZXopufuy9xu7jE4RVjzvAoSZBrW1mh5f6AC41qsKuNfN6BVqTPjNz",
  "key20": "4subD8wuNrFs5tb4yq63ampcz4QdCFjDbxPUMsS1RrN2M6Yaoth8weywkpStRuu6PnwwXk751A1qTzZZhw2c4sEX",
  "key21": "5LfW4vZrRt95uQUffYq3szWUfUrHjADY1Efuur8qgzvbqksbQBETGUj1RV5Rg2gcxroxCErDvZdz9W7VBS15Hw3S",
  "key22": "53myWwYTQM3gQAgbu2XwefoeRBDBWaWArqUVo6gkvhnPeJmKnh1aeJRfLMHUEF82uus7FckwhaiLbMYmtVGzkLbC",
  "key23": "5KTC239GqPSSPXNgJefoR23515KszXWBWZGRrxRffG62DZYtQsbtqWxosTK8eyZZbFveBtLeZW6y6fw6Xdh4PLff",
  "key24": "254MxzkCM4hjHRYuMsCLX1VBwaaukpnf9G6UqvoYaz5tFHRZs9YMMXL66oNVYf9XxJvWuFpWHhX5qDYok5ffKaCd",
  "key25": "3tUrCoBcPabByEZmrMHpZs4gg3v1A48pf1VtComRYJu7vQbWc6StanHn4ETBqYtQh7A38WJwpGpdShu96ZZp35Ag",
  "key26": "4roLCzHjg7knRKrn5JRTH1ApC9aeeiVBWEwFgUpE4ZaARsJeZTym8sPrEn89wrjU6ETupCXeLaEb7S4inbUXaVMU",
  "key27": "39H5wAdcXVFayUGKBshPq3CxFUfugnV8GKQjpaLeNDjgXFxcgA3Y1sUpykaTk8rdv4zRWZ7qEbj1id2M3a9q6Wx5"
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
