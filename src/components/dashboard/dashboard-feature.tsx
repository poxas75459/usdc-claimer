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
    "4G4VxRSFHYmGSKYaZrE1YHDSjR2Ko4DftnnSN6yEXpxT7xHA88Fuzb2BbdZLLQmRAMSH9pCtEQL2VxAb9N3JyeTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JPJTQjgNW64SeMNWXTkb5Q8bSdXp2hg2ogvAFqvmDtUUsndn9LuBKmZS57YGFJSre88RTcFgwicWBqMNkjsByrt",
  "key1": "5pv2xvMaZQvfxDyofNqKAoUjTqcdZdB7SFWAmmP5nBHZ26XfyvyNfw7J3k7zg917bLyr8C6EtmD7uLvPVGUBgTic",
  "key2": "45cDTWzU5uFxsi9pYWee6xPsFiM3ZC5kipV8QWhRmtqJntD1SL8Meiqw6GwbEqDqVSp5jktjtKfwumpgLG6MxNZ3",
  "key3": "49AwzFoUrC13zNuvsdgpNT5KiRvkQE61oNyKb9rFZLmuabYMFpSVaGQKovh3bwj63D2Dg2Sm8X7xcYzKZMEm7dte",
  "key4": "3PLTReYgmQfX6rVF1cF6VULjbmWwC8Bbvf9G3iy2LsyfsU8BFBcQfuoXSBEzLEwhTuJqAH49QgYbc9AdTG4EhYe1",
  "key5": "4feRpp6KguLwct17La5FS2VTy29mdupNTuvTSzJxiRvHRKQa3sLCTBQGxu8cX2MoX9xQt5eRy9QKNE8WJEKUSPCD",
  "key6": "5Drch8pUgXF2Q89PdHF2b3eTjbWe8Koh7TkyH62vebfegopPUdANEdravRu9KSsErD3wSi9HeFTBycUubDd5gpwc",
  "key7": "gc2QSPbaKfjDHVaq8aaLon5wCM4PrYf9d7LqW4nGZGWdezSRssLDmTZqRhij8ku92WdEh9W9LgVf979FbEiWA3g",
  "key8": "4BdumXa3PmQvhzTVm6tsbWGuJLxHJWud7yh4FW9VrwRawAobAnaKo8ZgYSSW68kzHaCPV4HNKToXWjFZ24vLbxJJ",
  "key9": "2hxfWPpddJuynX1MEL2mrCSVNnS6iUTR396y3ejqE1qBVCAoS95tdV4x6976i45jZ7oNCwXAgDQNaQht63oExC5J",
  "key10": "4heesfK32isodoNP36JN1KdSB3Tg59Z3fogRemTs9NftwDvoJZhTT2F5nVH31RMGZWvXvPt16efjidskCkiDq4h2",
  "key11": "2x6o7HdGdUgeMUhmeRXYjBX2LdCB5sCa67KE8HRmSzMGdEbgPz5xNZ5NxSkY2SAWvKgBx7QE9vyvE3s9HfpPdccD",
  "key12": "UtD7dFXZREaTxVRoQzRETtMUXy21S2rpz2LwY6qnvu1N6bcDb8AK47cbA9KRDT7o7p2xMuVw9YGNCzhByRC5jt3",
  "key13": "3TZ1S57DmFSwYG8g8T4r3Qyirjmo4tsShUvVp3kXfoButcueJH2pHMzEfnMCbr5MowL8jwZsYAPSPP1whkmFDnu8",
  "key14": "2ncBez2ZG9JvT4ZRtYJGvPW6kXktJHH8hRC9QW7AqJsjzDXjVoqtPmgpot8w73nYVtSeoh1MaKyy6pZdkPKoUrXJ",
  "key15": "2UZWwiDs746XTJvHrDNn8YR41YHUmyWCn4AjfGDKezG6r6KFyXvhJcn2qrfgvgLHe7KeMBHXsLBvVX8qkqPrWGrx",
  "key16": "3ody6rUWCe6QWkGFiZLuCpsXfwUY9GPY9iJfQ5oir7MKAZe9zQX6zpznJKy6hQAnaZnbXxyXJLqFonGfVcMrrWxi",
  "key17": "67A592ESTTyubuPswVAMuULjSfAEC1qYs35BVxMpkhZv4rEqBg2ok69tKzZZ9qbChzN88giWJH6b2oH7dwyWuagy",
  "key18": "3qbnxz6yTpfbGNASAy5Zf5r34SsrsBUFR7xvWhavKsmqWSp5qmiGff8aQ5coK7pGG6nhEAMDcfzxxRwYXj1YVmj",
  "key19": "2TNcNXVw7T23gACn9iJchGZJp269ZiHBKNxED6danZ1mSvDkCXn1Pn8JGCfsmQmyctTSAVoM9ZRuPpiXczEuwAz7",
  "key20": "5KmUdCNMRt87RoZD3RfnJoPBVYxVTe3xytUvEkzrKeoUFArFhKnjvqE26LixpDi9acw4Krn5SHnvgFrte32cQwr3",
  "key21": "yWPkvSktHZF4wwjbd6hEdXXYhXf9gx6j6aUYg54fX5WzR4QX6V9BmakN3YcPUseUQNnWMaSAEgPoGqwXt2Hnx3n",
  "key22": "5DzPb6fCsNbBzqJABrL2iJUmvinYL67BPAfqsK71sH1Q9yWGCRmH1KF7tVSBjusXjmz2bzCiXy6eGaBBzCYNKxHe",
  "key23": "5UP8RtMKdzWrJnQ14j7iW1z8pT8ZRJ9XiGrHVvb5DAuTN5Agn1MSbgmNE6mBpzquiwDDjhgWxRwqDXtgnLUh1Rk3",
  "key24": "v7pp51B3eTLvvzRLkkTamHZJDcQyANqyvyjmU3q5Kdew32gbCCeKLoNH5wEPdxBCBcJfGPYG7DbjLpi5cGfv44F",
  "key25": "214ArmZP7oYLHsnx81Kvzdqx7dMUUggrGvg1Cqfs3sKCE8gLw3h4Xv6TcArG5oxtPF3FUxQNx2X7WgjSAUchPWUF",
  "key26": "2JzLTVxNszphU1Ar9wxf61MX4utuJwzZe3VTuDz7xuyL1KhLj4dJNc96aM4KGi6avrzCAQJ2Ccz5sD9sViKXjt8d",
  "key27": "zAPQZEA4umsfukmkAXfSnx35s3i9qN3QXG47hFrH2XxyJTDrpGyQ7hxmjbpWpJSSGUr6R35a8LVrrN3sJt6DJG6"
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
