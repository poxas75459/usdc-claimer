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
    "44iVAZNJL343zy3SenqLz3yNsWhEY4XVbd2uyRx4SMNDbmuq2A16boU4Vukf1H49xB9A6Ftii8wcAbHGoWfM2Uje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qSMf7UBcURHuzqWxADGpHHM5hpxnw93dvqwA1jUHgkyKcMpKczWFP4sS8A2xmows2PBB3Gbis6TjLFNCqmx6dch",
  "key1": "5zdNQZgz9odQuRgmvBuaXHKzxUMZDHzLHpHreqyieFddWFvCwxK28uqbPQbM4BVGkeZw8rEaa178Lr2syCxkq5ea",
  "key2": "obRur2cXbFC1JYHU3nc9mo88F3d7BRMxGk6uPbyHG8uGaEezZgF1gaCHhKk1uTssBJiVpaoZzJNDugaFY3cEWFr",
  "key3": "2kPnWrg8WdqTFiLEuKDD8QZvBEmGPWosZQmPxE9CwaRYqYMULDvgpwzQaXyQBxSAbSy48affmAcWkBp3FtekHc1u",
  "key4": "3pnWTFHyr4dRqnqAa66t7SE6j34dK8FEmL7fYvVna8TMZrKYZAw1TkTbJxybSwBzoyserGSYf9vamx58NMpbduza",
  "key5": "2fMot9qoqFEcEUSgKxQ76XQrCbiA1gKXsJxFJqJaro9nyioa1KkmZHrpiw7amiY845WUZSgJduUpuyY86sYBuoEX",
  "key6": "4KYaUZHS586VJZJRyKkGfy1ZYkSf8SZCotmEQaAZwwyqmybZRcqNUC6XNJesVd4gFLqPVXj7hyRUu6Z5GyjqAqDH",
  "key7": "528dqSEi42WYN5WZjpRFusMZZ11G7LrFGmQ5KFVe5n88eUGbg5UAtEbWDRNoXeepBmewDDkBq2Ntw2j77tiUSnKW",
  "key8": "2DAUoFZF2qZvw7rrbNDFodsddrBjv39oeHutQXNiSp4MdfXhncvC8r828751eA6UPkTPPrB1xbEoKzyXbVLsvMcP",
  "key9": "5XKfxqvUqtXUnFxAfY44NqC3bCGHT9GNBwVgmV327wVHHUKEAXkc1ujroRu9P8QBNvMZpTnpeKMnsXno2HKEKR2P",
  "key10": "qCtXCHRe3wmWbpAmzt9uRGSekMr3Fr5LhKrmxHqNQ8VDFJjj2AzsGSdzRCn6kw5hHzm7a5L84ExvYn26xZ59ofz",
  "key11": "2fZ65GoJKdrEBTrrmaTMhGwAd3SfHbg3tf6943ArUiEygKJwvvNLXZb6DaaJ6jtTbJxmrqT4q49H48WAUxYYhDwa",
  "key12": "3QQ8E2s5HoCtEpHc5H5zm9MZ92gKVFkoYZqrBfB47FYnDDrGMgc2MoKqMRxpB8R9ZusEedoDVbCVVQRDN52jHLGc",
  "key13": "nfxKhLvjjSf4Szr9vgow7EoyGFjkKVBRu9jyT9WvjeWZ6rG2TYDyNPpsd7VL9ZV88HcUHvhsWCop1taiUhJcjiS",
  "key14": "5JFoYNGGDmDAz24uAfyfxWJ4NbSCJV2ZU3E9Ti9cw1sDnA38twfTsAdhwmXCwb1wiGy6FySeiZcdsbWs6s8bEBHN",
  "key15": "4y8kHGy7JCwXqKg3H6iEhVCP3Esj8vnVXcDhWbcpUMB51mwouvLrEy6UHBkKH2XHtMidQdKL2fvnCdz3fuAgPVEZ",
  "key16": "4o4oF3c2WfCikdAhWVzboLivpd7BMP5zrAMpcvyrPnxEUaqybmt6wP3WuF1qTCMGmyuwbrGnii1umo53MYB6mAxG",
  "key17": "L9aDMhfHjAyvbDY8Rqg3pvn1JcMATNFGUb2qqgXBxcMx1RRoaAKECdBNdz9zH15pVDPKrk5d2M7WF4Ed3sBjuQh",
  "key18": "LRF4ApUV6fJZJxE5jih1E5JKzZfYB1YispPB2dv3nmQbBY8KGJinCbZkPGzMnnM643u9cVN69wpmy3SF3sKE5Yd",
  "key19": "cw81XdbAgMNXQ8uXKuq346ftoWYss3BQkSyLhRomcFr9GG28kHKdbyRycthAmUXYZdPeizA2WbXLpp4EDUv8EQ5",
  "key20": "58RDBAjUD3SkfyXHraxB8NfzZm94SKjS9KARCcomk6k46ATdXALEuqvZzZikmhS1AWABi8PTMZgNwsonWuHaJcHy",
  "key21": "9KSUTKkDHoFMFymybjvmRNjVsH1rQdPAKpcUSVSiEcrFDqhgov8PTj8Dt9mFTn5FcEjKc5A95Qw2Zp6EbsudnFz",
  "key22": "2uJ3FKeNz95jaYVh9sE8WhxCQuipdbxHarf999csKKkJYj4TpEugUV2SrUmptH65w24L7R8nRkGysG4BSZeXtiJ8",
  "key23": "j16PsDKeSvX3KEupVg4PYzwaEn3X6T8Pzc1HWo44YULgn4nnKcmTmpFv9zU4ekedardZTUWJ24vVEgs7MWr6a4f",
  "key24": "3pKprECMpLgsaRL7y2NER1g5efC3oWAJ9qe1mPC8CueQUVxatjh1ojj92r1KfXRJyCKCaRHxRe5ZPkX4FMdBmT3M",
  "key25": "yTmY66rXDmmiJcsszRVqw31anWUpSxxcQaEv8TZmq2BYqaaZMRBJgzseNm5gWyBkjpwchhrjUyfvsvAT7NAqXrY",
  "key26": "44xkkWVFjiwB8WXCATMSQTPxwc4KWdV3sh3aVkPVEFQHCg5ZgBB2iGX7UTn8G9TXQMUVSSZ2HBc68XsZqcPE3UDc",
  "key27": "YpkHqawbyzTdvEgoFt2zvjUpZobenEkbRy6LSCw28eMMDvKHmR2KzLaeFNGkYHh5SaTe3xthZi9kNL12H8g2uJV",
  "key28": "5ak7bwZV6e7A65XfG5XKrWqBZPAnyqcXkAuoHBFQbbS483rtEjk6ydFTNvXP5btjvGNSJpwRS9HDmwMwNNH1qqxd",
  "key29": "2QJJuqrkQVARmrNbqPNjsf4qTdMvZkgXFc6nuSFf7zfAVmJGWwCYvzptfCgZEwDKqf7R8yfy6bYvjSDpPgbREe5",
  "key30": "3aZtaF3sqigkekGtDsM7QSahhEnrnoyZKLw6WM6F5Ca11SnWaTeqzwHT5NHcnHteBKK6ZsR3SiRvZSs5T8zD6w8c",
  "key31": "4R6nduDb1cfsJJktBj93ormGsJ3DtqufYhB6Zp9BL3Zq8CZ1zRqGrteCDygVEfrDifSd4HEUwLuLdA3vrENuvdnF",
  "key32": "2E3i9XhbSRoqXtw1TLwXqZK2JudKPSiQfLymqExiagP3hNznxtFvbkFUJpnGiePjLB6LYKK3YrYgGVs5K6hPemay",
  "key33": "5gAmPAk1cZjvmbGehEb3Nir7dhpeuANdR8fRzRk63cJBvfXR5PB2n38AknDhmgLAzt5Rqrxw1ntbccQhdBwfUpTV",
  "key34": "4R6HfkiPD7hgxfRefNmSqWv8c2TQrpADc85LFxGchXuBcyvgc1JsK9yd2hNVNBMf9GnP7rwhuMttA5ZbU8F5qggU",
  "key35": "KcMXy3c5JyDJTryLgvKyaBk6hFgjWgw4rMzwVaetiPoxE5S1FoMp2TZAdd9DhFaPGArx84nZZETLELTsgx3Pgi2",
  "key36": "2h2QuN5p2aLnYf32hkoe2Bdhu9PLEYxXZXa5Js3qLcoBVvKCGAfhnmpLVoaqZCNUsg5nL8Ek1kzH6DdXxbq3iu7q",
  "key37": "4cKZWH6JPKr2Dinqpg8qDjGMiUyf5oubdJieqb6yVYt1HVzSXzrgbG63AEBbA9WojjhmCP4njTvndJBvJfS38cpK",
  "key38": "wSYkLVfD3bQYyitAy5Qd9NheR2Ydm3FVKB4AUh1PAwBfUtKgxfrBMtkRhPhdVzhm5SquQxNDM1Rx6qUaYAZGw9n",
  "key39": "5EDwxzTcdqmXFogyoeenJik8zZHhd7ij2ZXqMVuQMqro9B7RUqihQHDYeYvJrXKNqRrZ32KJSFjrEhoEv2Z6AbFC",
  "key40": "5bjPrMUoceMf44qbaZLULHC1bKDRujFiyGynZyeEUfyo659h8Ew1ULhqDDJsnPNXyNztFdVqrsPwGK2uWrNNsb2q"
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
