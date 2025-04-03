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
    "21GM658pMwoVKR1LURVLRDR1YcH7GvpKs3vXeHH9CjydEMXoh7fyrmAmYJR5erqLuMB21vNxYHo7BEq2LW7izKhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P8BpMFXLkePT9utfu2hzhhTj3ua11bXyGqCFftEiGib7MKt6WUkabLeTsPnabFcbRJR6TUWo9DbU8S7grcfBpLg",
  "key1": "P7x9DNDmV3zSa7c46kE4NYv5WExTHnppxfmx4KeJPHwQTkSPfPjniBLPvN2jEPGBggpv7moTZwnBkMGeKGHXM8R",
  "key2": "2j826xvdnU1VDmp9K9nPZ5ERj3q5gronH2xF4B7gwprQGHkk8FY6fLgubyokqsEqdjkkJQvTqM8ev5mvkhDxGauM",
  "key3": "2nNcPUQr76VK17vH412sjXeMFhf9LiY1Q98MuPMZ6LbHri5y8FFdX7gmnkVAB1GF6NTdQR6GEpaHQcfTCvaN4FsD",
  "key4": "3KQMCFzY91ThK2enm8NoVmDkmxJ37whrQCQ62Fr8PzZoaKLHYwMnrHaLVgfVEqfdxCSpkbWgsbXxZPTEnXQTRmji",
  "key5": "5bGJmjCzKRsfX9JuKwCHCTb6dEHFK72JcGjgwpNnbqbhtKsoCxPYc5KtB4pBbU7vBxNtC9HQjdV54occEnxssojo",
  "key6": "24R8DcU6Yd5CuW6NLrpGomC1vxzn6c9pLAkiMmsKRXSyoKTGR74LKeuUdo5xY8EfQ1mwmeDeY5kaMcRJJPtdyoHZ",
  "key7": "5gcp3yGgbgPGnjJYS9eDZ1BRAEHRnkAeDyhCnfRKTCPy4DkAeveFFxPyPwEo1oTCdMPvMjqjsoBt4QJjYrTEyhq3",
  "key8": "5aggbnpMxYCGKs357QQKSpHCjmwLDBZ6WrtiYFi4VPmQVGgcmExcMEdMcfVQxE3LSvDLR8o6TaPL3ZZ5ngS17awn",
  "key9": "5Ub8qNfzf58ZCdKtgay1LycnzE6SzPscqkxy5vKpAfCH6v43WzCpTXsmyBdMs3y5LmWCraUUJcDE2UeGion7QnAo",
  "key10": "57Vi4naygTdCrczCaqLeendohQoPWKpbcSjTMcH9vcWbuMe3abNEz7qfgtQeRfsSSbo6LLzNE7qAW6YTZKUGcTrR",
  "key11": "3gQFL9qbcE8zv4jABCUhJ2fV3N9bvQFQSJXDUiM2rhQ4AvMJyVmRLPev9t6MdntHrERRk2pibGDPUhYED5uQmRxD",
  "key12": "5KvKJVXoWSCjFH7SqCxKtrUeY1ruk3v5v6DigKKxsiaDxz9HgiXsttiAkpUx3HkfmgNhfEDDBHgB5G8u3wD6GTMr",
  "key13": "oSyjCAXuMtBUZ73FvqVmyMfdwCZuffRB1KfUcVw5NuMJBkDpkV6AUtSZdUnZhQgMuRCKkg8UaRpk1mk3mYxBDKu",
  "key14": "qMP3K9ANWP2emtw755fCFCCwfXGtzTPxU2KC5BJibS49EquqCrcNhAivUYfLkihAZG6gkN9mF17WHjXchcqNKwq",
  "key15": "5c7i7MWKLKoavmZVpjVXFYtJhceMjSYUQyXuoCUzQyctoRG9saBZ7zFGChhkhH2foXp8SdwpakY5J1r1bXcvtvDg",
  "key16": "2pt17Lr75AbJ8WESRqnZXbK1wXLrwmeXv4gLP6C6dkkuMJbT1gCPJ4NDT7GXoo9tL3D1wrq5aPz5HcqMEaHX46UE",
  "key17": "4vQQQEQQdURZx1TDGxDrx5dmfwQL3SZCLMBW8xEvnnaSjmRcJrCnUmq5MW4LUAGsixAJ61N44od7kkEnamfYZDG6",
  "key18": "2kYXmF7Qc172iDKqv1suypnedXtg3P45m9KtRmq7ECvskme8Du6o6wpvaEcn6Xk7Sif8AKyiiGrkdV6k8GcikMFE",
  "key19": "5u7MsCJwMizVzAXAzKJ57fyAppwL6YPNpf8ypLWMFoa5MmR6hXj9XbYWdEq9LHM6QUMphyE6HcRubLY7A13TtSzq",
  "key20": "37cMW5pLpamsKSWZ1TqNUUXsVSUS3AmcSpAWLj9k3fpuG1JHyDUp3TCT8gH7QS99paG9SFfp531xYKXMbbWwgyFg",
  "key21": "5DYXfULiUcsX6Q9qBGFw47heE7KyXuTyxG1SvpMHuchVQPKjcpmaFT3E1RcxwNRLupp6c31YcsVLtcKqHAFjDrJb",
  "key22": "4YQShXUPeYW7NbYkSY9UgZPbPCHKQg8fKbGMXkr4n66FLyrMuHhnS2D1tE3qiWnMGnWTcJuZcE6Cj2VPLkHqSkP1",
  "key23": "5x1vXgkt5kZ7HTfQBioTrabFpeEvLK1qwb3KPSDG7ExAKjRpwfWanoj2N7eMMm9LV2NDLsfAJt9MSnubiaRQKUfv",
  "key24": "AxrgbfWpaQyBYLSMzuvgSaVYvieogeGXJ6G1QyKwhsgzZWuzkBGq9QiwARQH5Nv3RXrUdWBnN7CmG5GbMM1G4vu",
  "key25": "2yzCUUNxwXaCoomRqAQ1ZR2hk51DMYkfutQ437c2JgpxsuhMoofyHq9vqPoyH8n9TYE1ZWjZykxcKAttH4VaoKKz",
  "key26": "5XnEGY2bxS71G6VowqKRVkbpQ45ZaN9rYEF1ThiVDXgpAqy1Z54HfxM2rycAGg1ULt8FEU38vwVFiveR2BUhPMgS",
  "key27": "3xzZTdkte7bT6bMwpyw99eLRT3wCuGGsQTVnkKst1VPAd4C41Lq6ps4H5oHoQAQz21H67yJ6jGvMGMN5rYsrAyok",
  "key28": "4pFLf7v8FSx9NEmZ6wfprraVbojZN913h3MxwyQdxksv8wqHPSt4zBehsb9s4F7imeYswJUrQ91GZ2Wy2CHAASkT",
  "key29": "TmYmCphWh3PNnJgyJ6Do1wTHTTvZwuXVNyQkBU34MyRG7ALY7mCRcKESK9DVUL1D9E72anUtzEsg3j935cW2K6H",
  "key30": "56tqxmUfsn2qPejtUaETGJ7eWw9wKd63HBD85UY8PAj3xvME7ZTvYN6uU8zBKNbugUb2uqaq3ZRjVJHBpjE7w5gw",
  "key31": "qN2yfw1yNAeYGk5LkKjrDVdj7HAPh4QRH5XeKLDArejrEVVSJnovp8HSS9kKmDGHj3EfRCekh5GRFf6EbfoAMHU",
  "key32": "4WEdozFgebhxA2YpDMs4LYF9aRA6dF8nJQw1S93X8Eyt8GkY15vsckXpFPcCxY6DQZjwhBnqJ4VQ9cdoWLTZhBtJ"
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
