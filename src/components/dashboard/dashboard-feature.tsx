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
    "44mFruZvsR2wrtcBjUfZmYyPiYwr5ZzaBuSkNZs6LhjWTj3wX6fH7wG1kGryzdxCimUMFQ3LgamDpErsJgwz4qSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TThVKYiSMjHHwQMzvX3EcxwSZMEgJj9tLYKu8G3tyx1HLjZp16wVGabJiNw2CGBegofySPAL5pbC4A7oj6o19ch",
  "key1": "3Ltf4aFgan4mGAURZT8FtNhC7p79ZvzFah8tTzt1YW1jjvG1VQ3seLBBRD11wiLuSbB77HPQko9DZDZE9owyrCn",
  "key2": "2Vjn79oy5LCsADnBBhUxAyi9FunxWXh2r1oyJp4GWudLESRWd7Tor1zv4URGVeCPrtdGWysEWt77B4t4uuBsisUT",
  "key3": "2kEQiAGoy5AJtJ27UsvBWLdCvhoFTpefn2FTKB3RSDmyXu8cQzJXLpvxVUFJwHyjMLms1m7CnSDRAU43D7WY6JRY",
  "key4": "4ACJSei3pin5aWtFVteBr6XhoGatFegypyLRgcpftX8iuh62WMsQ8S4WEg5sJeJDahJXjvFih3R5REzdb2UQ8yUA",
  "key5": "2kMirg4Fq4uga5CYMjvGqEtUpHQhaNpvKR4pRs3dGutt9WidcyDxDro5bXmdJrNcz3npkExXGW2YMTLzoTPQAmnF",
  "key6": "2yrbCD1YdEsVCVxg6k5wqXDY18BsLNTgV3LBF1LV7o9DQsMgDMt1fqyxmmfKpKGN5TjvjYTHye8UD5pamahDnXRb",
  "key7": "SNhTmcxpxV9JUvZdpocV5dpFg7vwabENzQjSoEZuDM6TGp1S44CMHkTfLe23Fa1qBanroQx28D4MmFnVUTJCTh2",
  "key8": "8Rai2MdggroUz9SesnSvJYKDSArG2TiZ31sZsfvgaqwF4yd3RCx7GgR3YipwuEpsuSUdTVGEy92SZmHx779mn7P",
  "key9": "2hPCaQ5oMheVQi2d3fx6ybYHyFaSN1mRSigJeM4ByuGEUZrxRoXW5DQVCGCZWCRigpA62gipVR8Ris8b9jeABNNa",
  "key10": "4va3P3tAbdr12dm5EgNc4fpvHdFCt6hMECPFYcoekhNdbLGAEtdbxzCtasVM4vom5riDUFvrKH5JDQBmy42yYLGj",
  "key11": "2D14SRSEyv7j9urESMvY8XQeE7DPGc6RvaQCLWPAgXX3dccFdPRPA8ENTCVqBdNyYmggvC3ZXHko67PoiVDiJjnp",
  "key12": "4ChAmvJ3H4VFiRVGWjsfoQuniE7CYU5hzunpj9iFcdfcwyWF6Z1FuMyxxQ3jH4Ja1kSQnA3i64zACsafC3WEfBk2",
  "key13": "4935PHHUmf3ujZQzD7NncjPEfsvqpYkw1bLbieCbc1n4pJbHWeyUjdKRxbpQQHQxv7h24BWo4Qph2hT71jJdSimp",
  "key14": "F9v9Ui7iBM3kCMi194Qa3tSyufmVQMR9exygUAvxqywsfvf45M1JckMGeLdC8bxYAxnEBA9ZncGunxoyhJV3PMX",
  "key15": "3UVc7UCnJbei7K5g3e9X69q29URuNeEMR2jHSGFsd5FvrnccqUSxXsaZUNxBXPYEVNmGieMajdBVHJtxrEBdMPzm",
  "key16": "37oVjYfBgyPaEYntAadv36Worp4nYXoJCXdwNkS5EeJmrjaYWDBB6NYU6jZeDPRtUyG9aBGeHEkWUUbuNNAVaiEN",
  "key17": "MH6R4GcQnqwYqL8nCnANQzbRTgDdRF7KqFFnYBzbyXY8CXQq3KhoT48AoNoQ2SwKLpGZPvkWyu5hyGW2gQ4EKDK",
  "key18": "4iMFYGwkeK2Mgo6YJ62Tj4TWzNgvCbyT7QXY5faCqB66B2mLkjReHJCkHrN7V12yVrGYbwEax7N1M7PZKKMVfbCM",
  "key19": "M9yksuk5dHKg5V1knrxiDV7Aq3ZXtHBvnYjS1nyjukGufqB4b7cd6n4EdwjS9HFDCM97RWA6uo2K7Mqaqn4dDJA",
  "key20": "rNU4FyT3U694SHsKauw975RWDR8jUNTwQ8sWankdqnax5YG3CU8Vi9TLGSUaqa6yUTJVAzaGWB8GDZu2Rg212tc",
  "key21": "33x2XNvranrfr4wrN5TKNpiP3mpYkU8rh4MLDKX7hC1p9pFF8gTVug8X8p3DPdTYa138pMjWm2LD7jPGHZaKrNBo",
  "key22": "5mvsuwJbthqykyD6oKcZEbVsACQKHwnr8FhnNzoGmmFNUWeGutC4wwjQZnmJLA16y9uLH7j1WffLw6B7WVMmvnsn",
  "key23": "64f9AqsbGriCc8nn9EeWXNSeBPZjKRgy51Nf64oKAYQDcAqF3PYFYx8oErNTm8noyckM5YX56Za6bLTTnHHULFE1",
  "key24": "DXWsDJ28Yc3WTCv7X7wLMCiwpihJwFdJiYsKkBLGxWokEyYVod2hgkbPPDF58YSzLTPTQBZovyXvHcAiPuFDtxd",
  "key25": "3319yqLwfg3x9TLeTKJTZjpnqP2aNsL1wmgovxggekCXUSKXiFqxEANqisMNgjG9tR7GbrsNW2ZCzXNPmN7VKCfs",
  "key26": "hxfsWdfeb6Us1gXBw6XdjMFqcqGkPLauL8ydDc953aTqaCmfEWDmBu8FXbZqRwT8aRZQucoM9b9JEriozoVqGEC",
  "key27": "3DXBgKgX4on8HLEgVoexzRCdABCdRsaG7ewbBa66MqAYfCKZb8u9ZowUyV1ActSANCvjAtLc4VYScBQcg56u8sqZ",
  "key28": "21gPNKSmnrCzAPEbWxmBGvdY3KLqNiFpHmDTddu2R1q3ZNCoUc4AbQB6oGHJa4pmp6uo1SzQ13ZKXE4zfZQP6FJy"
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
