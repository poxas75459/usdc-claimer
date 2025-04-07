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
    "2SNzyk8UMe13BmXLHAxAy1Sgww7dhVKQDCM4tC6u7nVL85JVaAFrAQhgWraYL4ZYmBkdnnq1SRKhfrNJL7e5gRZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VDuP7z4EjbARko2dybBrTon1YE9tbTEqujaSinXLT5Ao9evGwinG6MJ4AWx53SRpVdfHNXg3ZYDYTK9XVv78eXD",
  "key1": "2RrX3DDYRBRRdoAft5PyGAsCdEHZPeWn2o5wLZE2pxuBbmjiXAVTuuJHUszdtc3VTZS77jYgtRCCNAraBaoA9rHy",
  "key2": "5GEHos7dDKasRT2bWqF55d1ZzegVKayduZsK5raoVGoDPF3zd4xT5oZf1bL6Eyg34nfvygY2L5cuGhoWkX4KaHLR",
  "key3": "MRUQLWYubSbwhcbN9tuvpAg9gubPGWDqKEG8UPTtcKTpErTb26oM82iBbFW4gyJn9BRxTTumRpevZpzkEeC7gpg",
  "key4": "MwQvc4HRrPq9X1nwfgszYc2VBqgLaoZ2S1uhezLMJ9pGQ3Q9EShi4eoYuY7A81cFqrW9NkydkT1uBVLTPbRtSiX",
  "key5": "X2iwnagdQ9mRikPxNaNYWwQ43cgKf1xM53CE9tgnNgzJJ1AzyjrrKQFTYpZ1yucYjBc6c2VaKL1MnCpggwZ5zVT",
  "key6": "HuSoKixkwo657dc3DiLzh11B2NUBDcnLkjcbcHgMXPWmf4Z34HBAxJ7iwab973PJa82fsBKX5D41ULNVM4nT2Ak",
  "key7": "28J1Xv763jGkSJsF7GpUs32XZfxnZFzi7PCCXFh8vidUiM19m4YL7tjDhcr7Etk9Wor1NewznR2UpeSfHM4pdEhM",
  "key8": "24yahq6WroFB7u8oj8485dfUz4LtzuRNMMY5TsHfHGegPb7hsXkvrEoEJKtCQ7S3euMzbqXN9SEwPsfXsQKcCUfh",
  "key9": "3afVWWvPXA9ZFYAxnPTxpSw765eV22vLoVCCbFAzusqEwRQLzQnssSsbAXxw4PCdH41WsgtRy2j48BCLvy7z6i4N",
  "key10": "CyKWSVpAZ2oJ6DNrojDKcWZ7b7GczzB2SVY9cBfUbSFMN9RdpEgdvxA7U9P6CZMcPVs1ehkPJ1sn3farxkjbf94",
  "key11": "56heqfTuejzvUQ3xif2nhkXExozYg4EUpatAXiH3qqm6boqDARmd6CSqMh8Uq4vF6aB5PN9qtaKcrkP6dX9GwHw",
  "key12": "5VbeHF4fgeCby4X3cgspR4rNdyS86Rquk22Gs6EfJUKAwqiDmqSBbGuqNG54EZ3XCbkzVjRzcpViKZjwg89poGnp",
  "key13": "5w8mB5bZA7ZisQc1dk3JmeTyiXCqj6A2DcwfFYjUXBYykdAFL1ZYd9ZRxSYwqt4DE14fdk9cqHUnNBcXNSnaY9F1",
  "key14": "4e2nRANzFx1mnaWztZm89tv8S9YbqBHoFpW1Kr1tB1xLptQzutyLuM8PCayDEQeYZJbnSuxJ7eWZukGe8Trbscjo",
  "key15": "vEh57zcgc8oVpM1L6xHATR2ACzhQNx393gZ22PCVfEaRv4C592Qwp1FBYmgAL5tbb9pDUWzVBWVEQyuSxz443mv",
  "key16": "mTJgsvuYKPoy87YFKSooPeacAjAtXayiEEHmgFqaCwusTXpzX4PgbDzLWBde5jPARtzA97akPkuMLPTQHBPw8ao",
  "key17": "Hvg9RffaYjRc99GFLRYUrW6VYLUHvTMMjqu4tpidjcpqA3sRJyvnEi2b4RYNMYU6ty9VFkrV9P3qERExNefF8BN",
  "key18": "4VNjENjQRamohwg2BRQvSpraLgLd82dYRvgB959fMTWtMgohfbQp4bEA4yfXUgppYDSMz5Bzw7S8j5cGUQ8bBMni",
  "key19": "W6Gj9DnDH4dJuUF1LTG8mST6QgDiMZbmxEbvbkkCNR1zmYyCj2o7HkGUUqzKigPthL27tfdQYcspFK8CcVQXtjL",
  "key20": "48Ae8vG1gTBdtencqKqyXbn9uWuCuFmcQZdGfR5oRWsxQVKzrhDTGHkCmWNcFrKjwiZfjeCAPV6PUF2V5mbvtNMc",
  "key21": "4ML6CrD78QwaDMiv3ioTLZFVxhRGpnRErDqTYmN7HDxKFgMVJtiUUg5ejEj7yXmfmmzhvS1Cd8cMCxVXRESB1X2h",
  "key22": "3s9hcT3SNyVPMQkZABxrDFj8SNKgZ6CQVJrATyVdGJMiMcWZ5KQML5RKKKxJ5rrGr2WayFhmfQomymdHJ4u1Jkqj",
  "key23": "4zcYnLXL6GPadRP2pAxbcpQJzutexYQx9CzPjq8ojT1fZCsCi6rBt6dzrfnBVavMFtoriuymiaHwC51hXxo2LfT6",
  "key24": "25muXuaafZyy955LvuZrc9RNXtcTDFEnPvQnoRg3gusJ55o7bsFb2hm2iGyoicPeFvYUFD1x6iu7UeRc4hVsn5AU",
  "key25": "Wa3grPHN2e6PzFzLwCqBtrmLyYaPg2yEfHKH9EfLWbadqQF7D43DvcbnEEKJ1Ty9ycnsk3jLfxavcVBxViBA66R",
  "key26": "5PU5TtTK7vMYEKQ7K3yvjcoAZofJtvmdWDNDu5vRYZW1vqt2MyccBZDd3VyskTvLKoe6xDpcMmmeq9z4YUXw6zAC"
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
