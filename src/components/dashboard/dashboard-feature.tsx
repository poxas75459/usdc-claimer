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
    "5xDQYpg89tY7tpC2ibey7eDTSeh7rTaiMnQGEprDKVtDDNS8CYGGPSudXDVEB2pxvBd3eRRqKFTv2n36NcYYh6tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nbeauCYWtUw4g5DBSRrAcvvqef7hge4tkU5BeYecZQTvYt6pqBYhGcEKCDZe21t4pNJB2GHTBMTsavjbcwEBBJs",
  "key1": "3L5Gd6qkecsqXm1pq9PpKpR8U8nmqjhMzpRMWk9osb9LazntvYsa9wuBReAAQ2hvzbWemd8CyBDj8GTSyx8EFfxs",
  "key2": "285BdRmSkgXcx1nvmu1ts6xggCVPaQF5AbstSTnYm2iYyhNzm7EJwGQn6RSfVdUYib9hve7KwX5qLeoTyJgkkLwC",
  "key3": "4rATRrYpCwJUjkjkTyZJMdEag7RtRhBJsnX8twUXV1jhPmii3GBs5cuFMqrsx7qnWxeB2WfzPEvJTnvSi64VTDpG",
  "key4": "28EBxFYFQGASTW87q3uLSbPjigi7sGqoNUBBaNPhMG1GjyP1FZukNNMY5dDnGwNhJk2YgHVWDC4W3nCdjh2iNyHP",
  "key5": "SVfwSjDbci1ULat89X4qjijirKNaoLy67wq1UePKx51MWEqGhkj1Fx7f2EiMDVNJauP891L7ifVBAPWbZwavE78",
  "key6": "3uV8USWPFtMvogJvw157RN93Hshk1mFrFDMcZ4N5aLta8u2XuELYiMjrD6hGkc86NL4q8niJDgcsghdfNhcH8KR5",
  "key7": "4vyahpGHdgoDgpqFCWcmF8PWmf4Lm3NapvmbrcSqFpbrWUj3HScUdUyiCqDq6ExqGmJ9ZCmojPKUMaQiLbZ3gXi4",
  "key8": "5pSX2jpLcvgeuis5vX58cRpmkX5PVFRxpXCackkLnTXEAWKBaEoWShumV2fnjv8F5gW4RZapCfVobQpTm6MNQnua",
  "key9": "5QXmw7JR7CK7nac6J94vmtGeravNCz2EjNafBcZ6Hp1pRWJEfup2ixHBMDppquyy6yLWE6YLQAcZ6RQvauiSosi6",
  "key10": "23Vuf2JVV5Tc3Qib1Q3jQQgBEmuTvcwahEZUPs9ibG6riHwTroK5SmjmRAMVGSarctKh3vP6fLpakqeYbwyNLgxs",
  "key11": "22w9LtNeYGZeqC7YMcd6PPvLpMExtSQLTUtS3qjXwc2nUQ8gyhrpdC2AEPvkhLxJ8g542UxdzXWKMjaXfxyuC1ha",
  "key12": "dVxpdGJhHD9JDHpRStxb9rW4XQU6sMbSQDnUonte8eGnSpfYppjgY363gwPQPXX6ovB1ECdJcisuTPCUqJVuEn5",
  "key13": "5RssbaothqC3kAcB4aLd7yucnrkGF5jUtZzB9eb4jBHr2bfWEpfW2bEVJTWMC7b4XyJjzyry1J5hHrYdWHQ9XB4T",
  "key14": "3DpNq3wKZKU9jAGXh8KgJGh8UpwYUKE9N3cWZseBhfcuYWkbjmMdhFTnbPBw7M4frVZpU8GAPncU2ZRGNn7kup86",
  "key15": "4bmrJRCzGnGXpAKWYCExsA1mkkW8EmwdLCsq57FBbauxWX3NGMwDJZkMSqtLNM4yyrmtvNxGoWjEnf5MhVaYuXSY",
  "key16": "4cu4AEQ7deGiq2QPBeK3fAxpJHxJmY3oUoyagnoMNeEask5j8NpXFDSLhbcceDcFKN2nvqTD3jA6bdNZoaqgj3jz",
  "key17": "3cwnuzqZ4hheV81zeUzs6YL5ZpWNrsBLMSNRqXbrutUUM9hXoUd3rRWCUT7k6QBdawUx69Dz778XS9opr9rZ3zjd",
  "key18": "4Ccv2CRBQEwStPAfjGxyzAczFLYu5e7MzdTsADAKkydBWpvhgJw3SnMh15eSuXd8qLpxzDiMV4X5ieDNgdWMSr9Q",
  "key19": "4yWpnerHr95BZHEWiZaETb3fet38ih8Vd7TJoALLfMKrWTBDSs7xR3UQDVWRhcMsErGYHTSuMBzS4HZCRf1WwfNM",
  "key20": "3tY6XVRakSLFhCQJ69JzwxZ1dB9HXu2hNSyQHa3LdMZguPwSDdL3ttth25fubq6X6AQfScbz6RVHbcBa51RNa9mo",
  "key21": "NrvxHLYgXMtAMU1ziFeqF8F8hUXQQApua6mAHqaBnXmWrB1kJ35FPERDF1i7bdnxttHqKhFRcB3Zx4Vxw4ZjfsR",
  "key22": "4rBTT1zUptW9ZaoF5cdTpS13VSFrwW3iMS9UuhhWMeLuDdTe2yYWCsUBVodJVnMDPKr22WZozcUyZsEXx7q5wX8o",
  "key23": "3egQoy2GSnixG6ahCciFD8UcXnb4Yt5BNjHVbFVV7h2zGEHCuYGHaw62ZndiqZVLZctSvWMxSLxDq6xnhW2ZX4V2",
  "key24": "2xGWcxK2NmPeusxgFAWUbkjaj4HcTAiAGVntyQB2NEzUSKcECWJPTaPpQ2gxRj88uKHqfgptGjQYdjVFs65NxSHz",
  "key25": "2mJjgHUFUTne6mhEP76BPQWr63rP63vY6JuwCU6qLAYxoaGPzRU47W2W9qJZnQGX9ZQdmMoTiAEMnEcRfVxUkKcT",
  "key26": "4jYc4qUBzdQu9VdN2HyMFMYJZEznrW9cUvk8LTQdQVCmEPk2SMujjFtUD2AgQ9geUkWDNrsdpzJSahrYxoT1RDSj",
  "key27": "5p6eTcouWkyEYhUBogn1uTPFtMsE97pfFw4vDVLm84Bz9McUbt9rga7N7kd57qhS6TeAoLctTTxzjUMSoXk1b6bJ",
  "key28": "L3HuEvkttMo5wP5QfGpoSfx9jmUrLhd1hoTbjtBga7KzzjzBb9CNqowiJAWSQJi1cbKJ84Td8yc3ejK4Ed3CJVX",
  "key29": "kPhWsE4LwAJhuny9T3Zxd4eoqGWVhMy9HHhrKSQ78n9voTgfR7AohiJFAskCxaZ769aLvFJ54t2tm2mhCSwQR68",
  "key30": "4A5QXyvnr2sVW2B9tBfWT66whujJUFJ6GZGozKa93hZPmJc2NY4zjvZPKPaLgpQF4X3WX1vuXC8G5wCF151KJcrN",
  "key31": "2sL1L3sKtReEC6KecLC4W4G2RLXVPYDGmqZTRKh2LfFxkF9ipPwK6dyGd36KJgxPBfsRCavJSCrzb4bzDStTqpg2",
  "key32": "5K3kua8quMsBKCiaoKu7A16APUiiUCevryK5RFi2ud1RdY8ABL1AsRESeHAjmiMqpRf3MScXPLaEUR3869FbLjgg",
  "key33": "59F3VVP6LuKQLvnXF3wQuL5zPA2JxyeVgt8ofZ78b8QsgK4CNqAXoaLDyECByKqsAeHeJmSRLxPKcNLhe4Pz4kk4",
  "key34": "4M4PrdgyuV9ockFd3MBzMdCiFRMFopa4CviEsyhUG2ZEPTcohyc2WCKed8j9man2PUitJnvqGtGikCtSJka3DQAE",
  "key35": "4eS6eEbBy4UcuLh6rQ4Z7LhqjQ4vMrJu2tszEeU7pLgzxNwee1PySJWzV2U3NSfxQLsbCUKtff7bvZfDmvx5N7zp",
  "key36": "2xCURKPznTGKKsbBhcZGS84ANrrB5DUnfMwARer5VrNtu6atgrPubXjLwccC6mSSqBo2jfxPVC6DxE9tYmVbbvkh"
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
